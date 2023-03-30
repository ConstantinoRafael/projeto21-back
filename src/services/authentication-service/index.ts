import { User } from "@prisma/client";
import userRepository from "../../repositories/user-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signIn({
  email,
  password,
}: SignInParams): Promise<SignInResult> {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw { message: "user not found" };
  }

  const userId = user.id;

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw { message: "email or password incorrect" };

  const token = jwt.sign({ userId }, `${process.env.JWT_SECRET}`);

  delete user.password;

  return {
    user,
    token,
  };
}

export type SignInParams = Pick<User, "email" | "password">;

type SignInResult = {
  user: Pick<User, "id" | "email">;
  token: string;
};

const authenticationService = {
  signIn,
};

export default authenticationService;
