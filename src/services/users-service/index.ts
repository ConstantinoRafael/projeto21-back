import bcrypt from "bcrypt";
import userRepository from "../../repositories/user-repository"

async function createUser({ email, password }) {
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

const userService = {
  createUser,
};

export default userService;
