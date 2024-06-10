import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { updateFacultyValidationSchema } from './faculty.validation';
import {
  deleteFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
} from './faculty.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const FacultyRoutes = express.Router();

FacultyRoutes.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.faculty),
  getAllFaculties,
);
FacultyRoutes.get('/:id', getSingleFaculty);

FacultyRoutes.patch(
  '/:id',
  validateRequest(updateFacultyValidationSchema),
  updateFaculty,
);

FacultyRoutes.delete('/:id', deleteFaculty);

export default FacultyRoutes;
