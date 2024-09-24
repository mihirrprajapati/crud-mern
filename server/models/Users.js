const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  gender: String,
  password: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
