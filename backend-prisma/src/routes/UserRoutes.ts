import { Router } from "express";
const userRoutes = Router();
import {
  getUsers,
  createUsers,
  updateUsers,
} from "../controllers/UserControllers";

userRoutes.post("/login", (request, response) => {
  return getUsers(request, response);
});

userRoutes.post("/", (request, response) => {
  return createUsers(request, response);
});

userRoutes.put("/:id", (request, response) => {
  return updateUsers(request, response);
});

export default userRoutes;
