import { Prisma } from "@prisma/client";
import prisma from "../../config/database";

async function findEnrollments() {
  return prisma.enrollment.findMany();
}

async function findEnrollmentsByInst(inst: string) {
  return prisma.enrollment.findMany({
    where: {
      instruments: {
        has: inst,
      },
    },
  });
}

const enrollmentsRepository = {
  findEnrollments,
  findEnrollmentsByInst,
};

export default enrollmentsRepository;
