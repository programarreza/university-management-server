import express from 'express';
import { createAdmin, createFaculty, createStudent } from './user.controller';

import validateRequest from '../../middlewares/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';

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

UserRoutes.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  createAdmin,
);

export = UserRoutes;
