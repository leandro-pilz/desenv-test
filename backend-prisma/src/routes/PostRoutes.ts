import { Router } from "express";
const postRoutes = Router();

postRoutes.get("/users", (request, response) => {
  return response.json({ message: "Ola Usuáio" });
});

postRoutes.post("/", (request, response) => {
  return response.json({ message: "Registrando usuário" });
});

postRoutes.put("/", (request, response) => {
  return response.json({ message: "Registrando usuário" });
});

export default postRoutes;
