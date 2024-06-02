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
StudentRoutes.get('/:studentId', getSingleStudent);
StudentRoutes.patch('/:studentId', validateRequest(updateStudentValidationSchema), updateStudent);
StudentRoutes.delete('/:studentId', deleteStudent);

export = StudentRoutes;
