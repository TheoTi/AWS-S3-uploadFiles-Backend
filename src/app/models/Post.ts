import mongoose, { Schema } from "mongoose";
import aws from 'aws-sdk';
import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

const s3 = new aws.S3();

const PostSchema: Schema = new mongoose.Schema({
  // original name
  name: String,
  size: Number,
  // name file with hash
  key: String,
  // aws s3 url file
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.pre('save', function() {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`
  }
});

PostSchema.pre('remove', function() {
  if (process.env.STORAGE_TYPE === 's3') {
    return s3.deleteObject({
      Bucket: process.env.AWS_BUCKET,
      Key: this.key,
    }).promise();
  } else {
    return promisify<Function>(fs.unlink)(resolve(__dirname, "..", "..", "..", "tmp", "uploads", this.key));
  }
});

export default mongoose.model("Post", PostSchema);
