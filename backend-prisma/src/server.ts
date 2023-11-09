import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes/Routes";

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(routes);

app.listen(3333, () => {
  console.log("Server started on port 3333!");
});
