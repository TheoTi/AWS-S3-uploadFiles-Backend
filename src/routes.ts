import { Router } from "express";
import multer from "multer";

import multerConfig from "./config/multer";

import PostsController from "./app/controllers/PostsController";

const router = Router();

router.post("/uploads", multer(multerConfig).single("file"), PostsController.create);
router.get("/uploads", PostsController.index);
router.delete("/uploads/:id", PostsController.delete);

export { router };
