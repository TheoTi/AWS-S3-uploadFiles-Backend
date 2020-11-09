import { Request, Response } from "express";

import Post from "../models/Post";

class PostController {
  async index(req: Request, res: Response) {
    const upload = await Post.find();
    
    if (!upload) {
      return res.json({ Error: "Uploads not found" });
    }

    return res.json(upload);
  }

  async create(req: Request, res: Response) {
    const { originalname: name, size, key, location: url = '' } = req.file;

    const upload = await Post.create({
      name,
      size,
      key,
      url,
    });

    return res.json(upload);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const file = await Post.findById(id);

    if (!file) {
      return res.json({ Error: "File don't exists"});
    }

    file.remove();

    return res.status(200).send();
  }
}

export default new PostController();
