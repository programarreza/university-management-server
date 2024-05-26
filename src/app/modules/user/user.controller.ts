/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { createStudentIntoDB } from './user.service';
import { catchAsync } from '../../utils/catchAsync';

// const catchAsync = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => next(err));
//   };
// };

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  // will cal service func to send this data
  const result = await createStudentIntoDB(password, studentData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is created successfully ',
    data: result,
  });
});

export { createStudent };
