import { getUsers, signUp } from "../controllers/users-controller";
import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", validateBody, signUp);

export { usersRouter };
