import express, { Request, Response } from "express";
import { usersRouter } from "./routers/users-router";
import { authenticationRouter } from "./routers/authentication-router";
import cors from "cors";
import { enrollmentsRouter } from "./routers/enrollments-router";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (_req: Request, res: Response) => res.send("I'm alive!"));
app.use("/users", usersRouter);
app.use("/auth", authenticationRouter);
app.use("/enrollments", enrollmentsRouter)

app.all("*", (_req: Request, res: Response) =>
  res.send("No request to this route")
);

export default app;
