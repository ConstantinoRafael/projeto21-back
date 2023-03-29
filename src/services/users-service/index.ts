import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import userRepository from "../../repositories/user-repository";

async function createUser({
  email,
  password,
}: CreateUserParams): Promise<User> {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw { message: "There is already an user with given email" };
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
  });
}

export type CreateUserParams = Pick<User, "email" | "password">;

const userService = {
  createUser,
};

export default userService;
