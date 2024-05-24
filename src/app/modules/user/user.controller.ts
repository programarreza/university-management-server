import { NextFunction, Request, Response } from 'express';
import { createStudentIntoDB } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    // will cal service func to send this data
    const result = await createStudentIntoDB(password, studentData);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student is created successfully ',
      data: result
    });
  } catch (err) {
    next(err);
  }
};

export { createStudent };
