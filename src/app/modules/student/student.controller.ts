import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import {
  deleteStudentFromDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
} from './student.service';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await getAllStudentsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is created successfully ',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await getSingleStudentFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is rendered successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const id = req.params.id;
  await deleteStudentFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is deleted successfully',
  });
});

export { deleteStudent, getAllStudents, getSingleStudent };
