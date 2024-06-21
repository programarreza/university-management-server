import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import {
  createEnrolledCourse,
  updateEnrolledCourseMarks,
} from './enrolledCourse.controller';
import {
  createEnrolledCourseValidationZodSchema,
  updateEnrolledCourseValidationZodSchema,
} from './enrolledCourse.validation';

const enrolledCourseRoutes = Router();

enrolledCourseRoutes.post(
  '/create-enrolled-course',
  validateRequest(createEnrolledCourseValidationZodSchema),
  auth('student'),
  createEnrolledCourse,
);

enrolledCourseRoutes.patch(
  '/update-enrolled-marks',
  auth('faculty'),
  validateRequest(updateEnrolledCourseValidationZodSchema),
  updateEnrolledCourseMarks,
);

export default enrolledCourseRoutes;
