import { Request, Response } from 'express';
import {
  createStudentIntoDB,
  deleteStudentFromDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
} from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    // data validation using Joi
    // const { error, value } = studentValidationSchema.validate(student); // error, value

    // data validation using zod
    const zodparsedData = studentValidationSchema.parse(student);

    // will cal service func to send this data
    const result = await createStudentIntoDB(zodparsedData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully ',
      payload: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong ',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await getAllStudentsFromDB();
    // send response
    res.status(200).json({
      success: true,
      message: 'Students is rendered successfully',
      payload: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong ',
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await getSingleStudentFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is rendered successfully',
      payload: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong ',
      error: error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteStudentFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      // payload: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong ',
      error: error,
    });
  }
};

export { createStudent, getAllStudents, getSingleStudent, deleteStudent };
