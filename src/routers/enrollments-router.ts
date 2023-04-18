import { getEnrollments } from "../controllers/enrollments-controller";
import { Router } from "express";

const enrollmentsRouter = Router();

enrollmentsRouter.get("/", getEnrollments);
// enrollmentsRouter.post("/", postCreateOrUpdateEnrollment);

export { enrollmentsRouter };
