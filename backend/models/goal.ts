import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Goal = mongoose.model("Goal", GoalSchema);

export default Goal;
