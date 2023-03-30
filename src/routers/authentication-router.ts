import { Router } from "express";
import { validateBodySignIn } from "../middlewares/validation-middleware";
import { signInPost } from "../controllers/authentication-controller";

const authenticationRouter = Router();

authenticationRouter.post("/sign-in", validateBodySignIn, signInPost);

export {authenticationRouter};