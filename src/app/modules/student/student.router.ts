import express from 'express';
import {
  deleteStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
} from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const StudentRoutes = express.Router();

// will call controller func
StudentRoutes.get('/', getAllStudents);
StudentRoutes.get('/:id', getSingleStudent);
StudentRoutes.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),
  updateStudent,
);
StudentRoutes.delete('/:id', deleteStudent);

export = StudentRoutes;
