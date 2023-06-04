import cors from "cors";
import express, { Application, Request, Response } from "express";
import config from "./config";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = config.port;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
