import mongoose from "mongoose";

const KudosSchema = new mongoose.Schema(
  {
    authorid: {
      type: String,
      required: true,
    },
    recipientid: {
      type: String,
      required: true,
    },
    authorname: {
      type: String,
      required: true,
    },
    recipientname: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "posts" }
);

const Kudos = mongoose.model("Kudos", KudosSchema);

export default Kudos;
