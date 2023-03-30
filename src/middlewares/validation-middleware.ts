import { NextFunction, Request, Response } from "express";
import { createUserSchema } from "../schemas/users-schemas";
import { signInSchema } from "../schemas/authentication-schemas";

export function validateBody(req: Request, res: Response, next: NextFunction) {
  const user = req.body;

  const { error } = createUserSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((d) => d.message);
    return res.status(400).send(errors);
  }

  next();
}

export function validateBodySignIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.body;

  

  const { error } = signInSchema.validate(user, { abortEarly: false });

  if (error) {
    
    const errors = error.details.map((d) => d.message);
    return res.status(400).send(errors);
  }

  next();
}
