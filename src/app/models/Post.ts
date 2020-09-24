import mongoose, { Schema } from "mongoose";

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

export default mongoose.model("Post", PostSchema);
