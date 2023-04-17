import { Prisma } from "@prisma/client";
import prisma from "../../config/database";

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

async function getUsersWithEnrollments() {
  return prisma.user.findMany({
    include: {
      Enrrolment: true
    }
  })
}

const userRepository = {
  findByEmail,
  create,
  getUsersWithEnrollments
};

export default userRepository;
