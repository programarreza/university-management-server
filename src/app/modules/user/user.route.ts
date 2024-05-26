import express from 'express';
import { createStudent } from './user.controller';

import validateRequest from '../../middlewares/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';

const UserRoutes = express.Router();

UserRoutes.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  createStudent,
);

export = UserRoutes;
