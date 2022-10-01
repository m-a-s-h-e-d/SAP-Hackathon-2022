import mongoose from "mongoose";

const KudosSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
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
});

const Kudos = mongoose.model("Kudos", KudosSchema);

export default Kudos;
