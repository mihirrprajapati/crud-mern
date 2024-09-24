import express from "express";
import {
  CreateUser,
  GetUsers,
  GetUser,
  DeleteUser,
  UpdateUser,
} from "../controllers/UserControllers.js";

const BillingRouters = express.Router();

BillingRouters.post("/create", CreateUser);

BillingRouters.get("/getAll", GetUsers);

BillingRouters.get("/getUser/:id", GetUser);

BillingRouters.delete("/deleteUser/:id", DeleteUser);

BillingRouters.put("/updateUser/:id", UpdateUser);

export default BillingRouters;
