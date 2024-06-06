import express from 'express';
import {
  createOfferedCourse,
  getAllOfferedCourses,
  getSingleOfferedCourse,
  updateOfferedCourse,
} from './offeredCourse.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  createOfferedCourseValidationSchema,
  updateOfferedCourseValidationSchema,
} from './offeredCourse.validation';

const offeredCourseRoutes = express.Router();

offeredCourseRoutes.get('/', getAllOfferedCourses);
offeredCourseRoutes.get('/:id', getSingleOfferedCourse);

offeredCourseRoutes.post(
  '/create-offered-course',
  validateRequest(createOfferedCourseValidationSchema),
  createOfferedCourse,
);

offeredCourseRoutes.patch(
  '/:id',
  validateRequest(updateOfferedCourseValidationSchema),
  updateOfferedCourse,
);

export default offeredCourseRoutes;
