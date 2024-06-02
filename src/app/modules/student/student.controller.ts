import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  deleteStudentFromDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
} from './student.service';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await getAllStudentsFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Students is rendered successfully ',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await getSingleStudentFromDB(studentId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is rendered successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;

  const { student } = req.body;

  const updatedStudent = await updateStudentIntoDB(studentId, student);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is updated successfully',
    data: updatedStudent,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;

  await deleteStudentFromDB(studentId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is deleted successfully',
  });
});

export { deleteStudent, getAllStudents, getSingleStudent, updateStudent };
