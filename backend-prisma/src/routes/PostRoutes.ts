import { Router } from "express";
const postRoutes = Router();
import {
  getAllPostByUser,
  createPost,
  updatePost,
} from "../controllers/PostController";

postRoutes.get("/users/:userId", (request, response) => {
  return getAllPostByUser(request, response);
});

postRoutes.post("/", (request, response) => {
  return createPost(request, response);
});

postRoutes.put("/:id", (request, response) => {
  return updatePost(request, response);
});

export default postRoutes;
