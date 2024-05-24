import { NextFunction, Request, Response } from 'express';
import {
  deleteStudentFromDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
} from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getAllStudentsFromDB();
    // send response
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

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await getSingleStudentFromDB(id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message:'Student is rendered successfully',
      data: result
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    await deleteStudentFromDB(id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message:'Student is deleted successfully',
    });

  } catch (err) {
    next(err);
  }
};

export { deleteStudent, getAllStudents, getSingleStudent };
