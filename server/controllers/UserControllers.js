import UserModel from "../models/UserModels.js";

const CreateUser = async (req, res) => {
  try {
    const { fname, lname, email, gender, password } = req.body;

    const newUser = new UserModel({
      fname,
      lname,
      email,
      gender,
      password,
    });

    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User Created Successfully", newUser });
  } catch (error) {
    console.log(error);
  }
};

const GetUsers = (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

const GetUser = (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

const DeleteUser = (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

const UpdateUser = (req, res) => {
  const id = req.params.id;
  const { fname, lname, email, gender, password } = req.body;

  UserModel.findByIdAndUpdate(
    { _id: id },
    { fname, lname, email, gender, password }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

export { CreateUser, GetUsers, GetUser, DeleteUser, UpdateUser };
