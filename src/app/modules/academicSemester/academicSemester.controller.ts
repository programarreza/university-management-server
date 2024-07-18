import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemestersFromDB,
  updateAcademicSemesterIntoDB,
} from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  // will cal service func to send this data
  const result = await createAcademicSemesterIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester is created successfully ',
    data: result,
  });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
  // will cal service func to send this data
  const result = await getAllAcademicSemestersFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester is retrieved successfully',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  // will cal service func to send this data
  const result = await getSingleAcademicSemestersFromDB(semesterId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Academic Semester is retrieved successfully',
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  // will cal service func to send this data
  const result = await updateAcademicSemesterIntoDB(semesterId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: ' Academic Semester is updated successfully',
    data: result,
  });
});

export {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
