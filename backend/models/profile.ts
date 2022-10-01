import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
