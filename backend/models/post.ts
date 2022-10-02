import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
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
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true, collection: "posts" }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
