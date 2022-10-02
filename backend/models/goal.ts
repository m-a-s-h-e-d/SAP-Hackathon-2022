import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema(
  {
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
  },
  { collection: "goals" }
);

const Goal = mongoose.model("Goal", GoalSchema);

export default Goal;
