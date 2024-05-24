import { Request, Response } from 'express';
import { createStudentIntoDB } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // will cal service func to send this data
    const result = await createStudentIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully ',
      payload: result,
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong ',
      error: error,
    });
  }
};

export { createStudent };
