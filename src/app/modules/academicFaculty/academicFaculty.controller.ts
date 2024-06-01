import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesIntoDB,
  getSingleAcademicFacultyIntoDB,
  updateAcademicFacultyIntoDB,
} from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await createAcademicFacultyIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'create academic faculty is successfully',
    data: result,
  });
});

const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await getAllAcademicFacultiesIntoDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: ' academic faculties is retrieved successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await getSingleAcademicFacultyIntoDB(facultyId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'single academic faculty is retrieved successfully',
    data: result,
  });
});
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await updateAcademicFacultyIntoDB(facultyId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: ' academic faculty is updated successfully',
    data: result,
  });
});

export {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty
};
