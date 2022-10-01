import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  authorid: {
    type: String,
    required: true,
  },
  authorname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
