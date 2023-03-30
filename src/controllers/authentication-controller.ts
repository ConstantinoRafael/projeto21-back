import { Request, Response } from "express";
import httpStatus from "http-status";
import authenticationService, {
  SignInParams,
} from "../services/authentication-service";

export async function signInPost(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await authenticationService.signIn({ email, password });

    return res.status(200).send(result);
  } catch (error) {
      console.log(error)
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}