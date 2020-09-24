import { Request, Response } from 'express';

import Post from '../models/Post';

class PostController {
  async create(req: Request, res: Response) {
    const { originalname: name, size, filename: key } = req.file;
    
    const post = await Post.create({
      name,
      size,
      key,
      url: '',
    });

    res.json(post);
  }
}

export default new PostController();
