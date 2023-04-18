import { getEnrollments, getEnrollmentsByInstrument } from "../controllers/enrollments-controller";
import { Router } from "express";

const enrollmentsRouter = Router();

enrollmentsRouter.get("/", getEnrollments);
enrollmentsRouter.get("/:inst", getEnrollmentsByInstrument)
// enrollmentsRouter.post("/", postCreateOrUpdateEnrollment);

export { enrollmentsRouter };
