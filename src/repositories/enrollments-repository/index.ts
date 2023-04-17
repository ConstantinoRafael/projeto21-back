import { Prisma } from "@prisma/client";
import prisma from "../../config/database";

async function findEnrollmenteByUserId(userId: number) {
  return prisma.enrollment.findFirst({
    where: {
      userId,
    },
  });
}

const enrollmentsRepository = {
    findEnrollmenteByUserId
}

export default enrollmentsRepository;
