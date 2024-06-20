import { Router } from 'express';
import { createEnrolledCourse } from './enrolledCourse.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { createEnrolledCourseValidationZodSchema } from './enrolledCourse.validation';

const enrolledCourseRoutes = Router();

enrolledCourseRoutes.post(
  '/create-enrolled-course',
  validateRequest(createEnrolledCourseValidationZodSchema),
  auth('student'), 
  createEnrolledCourse,
);

export default enrolledCourseRoutes
