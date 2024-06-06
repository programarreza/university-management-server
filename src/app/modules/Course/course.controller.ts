import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  assignFacultyWithCourseIntoDB,
  createCourseIntoDB,
  deleteCourseFromDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  removeFacultyFromCourseFromDB,
  updateCourseIntoDB,
} from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const result = await createCourseIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'course is created successfully',
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await getAllCoursesFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: ' Courses is retrieved successfully',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleCourseFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course is retrieved successfully',
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateCourseIntoDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course is updated successfully',
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteCourseFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course is deleted successfully',
    data: result,
  });
});

const assignFacultyWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;

  const result = await assignFacultyWithCourseIntoDB(courseId, faculties);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: ' Faculties assign is successfully',
    data: result,
  });
});

const removeFacultyFromCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;

  const result = await removeFacultyFromCourseFromDB(courseId, faculties);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: ' Faculties remove successfully',
    data: result,
  });
});

export {
  assignFacultyWithCourse,
  createCourse,
  deleteCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  removeFacultyFromCourse 
};
