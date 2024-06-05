import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { updateFacultyValidationSchema } from './faculty.validation';
import {
  deleteFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
} from './faculty.controller';

const FacultyRoutes = express.Router();

FacultyRoutes.get('/', getAllFaculties);
FacultyRoutes.get('/:id', getSingleFaculty);

FacultyRoutes.patch(
  '/:id',
  validateRequest(updateFacultyValidationSchema),
  updateFaculty,
);

FacultyRoutes.delete('/:id', deleteFaculty);

export default FacultyRoutes;
