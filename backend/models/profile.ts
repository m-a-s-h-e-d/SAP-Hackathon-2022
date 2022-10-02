import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: false,
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
