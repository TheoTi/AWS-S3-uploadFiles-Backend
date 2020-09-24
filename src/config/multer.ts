import 'express';
import multer, { FileFilterCallback, Options } from "multer";
import { resolve } from "path";
import crypto from "crypto";

export default<Options> {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
    filename: (req: any, file: any, cb) => {
      crypto.randomBytes(16, (err: Error, hash) => {
        if (err) {
          cb(null, String(err));
        }
        
        const fileName: string = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  limits: {
    filseSize: Number(2 * 1024 * 1024),
  },
  filterFile: (req: any, file: Express.Multer.File, cb: FileFilterCallback) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif"
    ];
    
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
