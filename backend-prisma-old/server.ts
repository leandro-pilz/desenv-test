import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
