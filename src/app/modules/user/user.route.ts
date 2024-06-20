import express, { NextFunction, Request, Response } from 'express';
import {
  changeStatus,
  createAdmin,
  createFaculty,
  createStudent,
  getMe,
} from './user.controller';

import validateRequest from '../../middlewares/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import { changeStatusValidationSchema } from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';

const UserRoutes = express.Router();

UserRoutes.post(
  '/create-student',
  auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createStudentValidationSchema),
  createStudent,
);
UserRoutes.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createFacultyValidationSchema),
  createFaculty,
);

UserRoutes.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createAdminValidationSchema),
  createAdmin,
);

UserRoutes.post(
  '/change-status/:id',
  auth('admin'),
  validateRequest(changeStatusValidationSchema),
  changeStatus,
);

UserRoutes.get('/me', auth('student', 'faculty', 'admin'), getMe);

export = UserRoutes;
