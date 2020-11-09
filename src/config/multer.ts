import "express";
import multer, { FileFilterCallback, Options } from "multer";
import { resolve } from "path";
import crypto from "crypto";
import aws, { S3 } from 'aws-sdk';
import multerS3 from 'multer-s3';

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
    filename: (req: any, file: Express.MulterS3.File, cb) => {
      crypto.randomBytes(16, (err: Error, hash) => {
        if (err) {
          cb(null, String(err));
        }
        
        file.key = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, file.key);
      });
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'uploadbackend',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req: any, file: Express.MulterS3.File, cb: any) => {
      crypto.randomBytes(16, (err: Error, hash) => {
        if (err) {
          cb(null, String(err));
        }
        
        const fileName: string = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    }
  }),
}

export default<Options> {
  storage: storageTypes[process.env.STORAGE_TYPE],
  limits: {
    filseSize: Number(2 * 1024 * 1024),
  },
  fileFilter: (req: any, file: Express.Multer.File, cb: FileFilterCallback) => {
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
