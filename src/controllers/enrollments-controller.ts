import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getEnrollmentByUser(req: Request, res: Response) {
  const { userId } = req;

  try {
    const enrollment = await enrollmentesService.getEnrollmentByUserId(userId);

    return res.status(httpStatus.OK).send(enrollment);
  } catch {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function postCreateOrUpdateEnrollment(
  req: Request,
  res: Response
) {
  try {
    await enrollmentsService.createOrUpdateEnrollment({
      ...req.body,
      userId: req.userId,
    });

    return res.sendStatus(httpStatus.OK);
  } catch {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
