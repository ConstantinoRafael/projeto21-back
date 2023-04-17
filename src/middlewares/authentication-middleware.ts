import { Response, Request, NextFunction } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";

type TokenPayload = {
  userId: string;
  iat: number;
  exp: number;
};

export async function authenticatedToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ error: "Token not provided" });
  }

  const [, token] = authorization.split(" ");

  try {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);

    const { userId } = decoded as TokenPayload;

    res.locals.userId = userId;

    return next();
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).json({ error: "Token invalid" });
  }
}
