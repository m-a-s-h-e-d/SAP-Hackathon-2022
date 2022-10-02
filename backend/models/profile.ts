import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
      unique: true,
    },
    picture: {
      type: String,
      required: false,
      default: "None",
    },
    location: {
      type: String,
      required: true,
    },
  },
  { collection: "profiles" }
);

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
