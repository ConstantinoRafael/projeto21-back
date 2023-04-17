import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "../services/users-service";

export async function signUp(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await userService.createUser({ email, password });
    return res
      .status(httpStatus.CREATED)
      .json({ id: user.id, email: user.email });
  } catch (error) {
    console.log(error);
    if (error.message === "There is already an user with given email") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getUsers(req: Request, res: Response) {

  try {
    const users = await userService.getUsersWithEnrollments();
    return res.status(httpStatus.OK).send(users);

  } catch (error) {
    console.log(error);
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}