import express, { Request, Response } from "express";
import { usersRouter } from "./routers/users-router";

const app = express();
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => res.send("I'm alive!"));
app.use("/users", usersRouter);
app.all("*", (_req: Request, res: Response) =>
  res.send("No request to this route")
);

export default app;
