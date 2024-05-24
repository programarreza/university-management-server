import express from 'express';
import {
  deleteStudent,
  getAllStudents,
  getSingleStudent,
} from './student.controller';

const studentRouter = express.Router();

// will call controller func
studentRouter.get('/', getAllStudents);
studentRouter.get('/:id', getSingleStudent);
studentRouter.delete('/:id', deleteStudent);

export = studentRouter;
