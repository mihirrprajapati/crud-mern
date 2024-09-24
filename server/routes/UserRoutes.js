import express from "express";
import {
  CreateUser,
  GetUsers,
  GetUser,
  DeleteUser,
  UpdateUser,
} from "../controllers/UserControllers.js";

const routers = express.Router();

routers.post("/create", CreateUser);

routers.get("/getAll", GetUsers);

routers.get("/getUser/:id", GetUser);

routers.delete("/deleteUser/:id", DeleteUser);

routers.put("/updateUser/:id", UpdateUser);

export default routers;
