import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/first");
    console.log("database connected....");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
