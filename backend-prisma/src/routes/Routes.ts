import { Router } from "express";
import userRoutes from "../routes/UserRoutes";
import postRoutes from "../routes/PostRoutes";

const routes = Router();
routes.use("/api/users", userRoutes);
routes.use("/api/posts", postRoutes);

export default routes;
