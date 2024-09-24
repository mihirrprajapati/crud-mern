import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
  },
});

const UserModel = mongoose.model("user2", userSchema);

export default UserModel;
