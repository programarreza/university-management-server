import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  assignFacultyWithCourse,
  createCourse,
  deleteCourse,
  getAllCourses,
  getFacultiesWithCourse,
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
import { USER_ROLE } from '../user/user.constant';

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

courseRoutes.get(
  '/:courseId/get-faculties',
  auth(
    // USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  getFacultiesWithCourse,
);

courseRoutes.delete(
  '/:courseId/remove-faculties',
  validateRequest(facultyWithCourseValidationSchema),
  removeFacultyFromCourse,
);

export default courseRoutes;
