import express from 'express';
import { createFaculty, createStudent } from './user.controller';

import validateRequest from '../../middlewares/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';

const UserRoutes = express.Router();

UserRoutes.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  createStudent,
);
UserRoutes.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  createFaculty,
);

export = UserRoutes;
