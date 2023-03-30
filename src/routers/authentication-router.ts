import { Router } from "express";
import { signInPost } from "../controllers/authentication-controller";

const authenticationRouter = Router();

authenticationRouter.post("/sign-in", signInPost);

export {authenticationRouter};