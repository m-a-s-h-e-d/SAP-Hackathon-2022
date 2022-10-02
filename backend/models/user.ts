import mongoose from "mongoose";

function hasWhiteSpace(s: String) {
  return s.indexOf(" ") == -1;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: hasWhiteSpace,
        message: "Username cannot contain whitespace",
      },
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

const User = mongoose.model("User", UserSchema);

export default User;
