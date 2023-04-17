import { Request, Response } from "express";
import httpStatus from "http-status";
import enrollmentsService from "services/enrollments-service";

export async function getEnrollmentByUser(req: Request, res: Response) {
  const userId = res.locals.userId;

  try {
    const enrollment = await enrollmentsService.getEnrollmentByUserId(userId);

    return res.status(httpStatus.OK).send(enrollment);
  } catch {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function postCreateOrUpdateEnrollment(
  req: Request,
  res: Response
) {
  // try {
  //   await enrollmentsService.createOrUpdateEnrollment({
  //     ...req.body,
  //     userId: req.userId,
  //   });
  //   return res.sendStatus(httpStatus.OK);
  // } catch {
  //   return res.sendStatus(httpStatus.BAD_REQUEST);
  // }
}
