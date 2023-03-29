import { signUp } from "../controllers/users-controller";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/", signUp);

export { usersRouter };
