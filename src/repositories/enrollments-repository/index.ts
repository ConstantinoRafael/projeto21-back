import { Prisma } from "@prisma/client";
import prisma from "../../config/database";

async function findEnrollments() {
  return prisma.enrollment.findMany();
}

const enrollmentsRepository = {
    findEnrollments
}

export default enrollmentsRepository;
