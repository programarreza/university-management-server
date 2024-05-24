import express from 'express';
import {
  deleteStudent,
  getAllStudents,
  getSingleStudent,
} from './student.controller';

const StudentRoutes = express.Router();

// will call controller func
StudentRoutes.get('/', getAllStudents);
StudentRoutes.get('/:id', getSingleStudent);
StudentRoutes.delete('/:id', deleteStudent);

export = StudentRoutes;
