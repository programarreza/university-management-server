import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  assignFacultyWithCourse,
  createCourse,
  deleteCourse,
  getAllCourses,
  getSingleCourse,
  removeFacultyFromCourse,
  updateCourse,
} from './course.controller';
import {
  createCourseValidationSchema,
  facultyWithCourseValidationSchema,
  updateCourseValidationSchema,
} from './course.validation';
import auth from '../../middlewares/auth';

const courseRoutes = express.Router();

courseRoutes.post(
  '/create-course',
  auth('admin'),
  validateRequest(createCourseValidationSchema),
  createCourse,
);

courseRoutes.get('/', auth('student', 'faculty', 'admin'), getAllCourses);
courseRoutes.get('/:id', auth('student', 'faculty', 'admin'), getSingleCourse);

courseRoutes.patch(
  '/:id',
  auth('admin'),
  validateRequest(updateCourseValidationSchema),
  updateCourse,
);

courseRoutes.delete('/:id', auth('admin'), deleteCourse);

courseRoutes.put(
  '/:courseId/assign-faculties',
  auth('admin'),
  validateRequest(facultyWithCourseValidationSchema),
  assignFacultyWithCourse,
);

courseRoutes.delete(
  '/:courseId/remove-faculties',
  validateRequest(facultyWithCourseValidationSchema),
  removeFacultyFromCourse,
);

export default courseRoutes;
