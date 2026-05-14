import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/usersController.js";

const UserRoute = express.Router();

UserRoute.get("/", getUsers);
UserRoute.post("/", createUser);
UserRoute.put("/:name", updateUser);
UserRoute.delete("/:name", deleteUser)

export default UserRoute;
