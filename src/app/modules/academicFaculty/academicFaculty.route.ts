import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
} from './academicFaculty.controller';
import {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
} from './academicFaculty.validation';

const academicFacultyRoutes = express.Router();

academicFacultyRoutes.post(
  '/create-academic-faculty',
  validateRequest(createAcademicFacultyValidationSchema),
  createAcademicFaculty,
);

academicFacultyRoutes.get('/', getAllAcademicFaculties);
academicFacultyRoutes.get('/:facultyId', getSingleAcademicFaculty);

academicFacultyRoutes.patch(
  '/:facultyId',
  validateRequest(updateAcademicFacultyValidationSchema),
  updateAcademicFaculty,
);

export default academicFacultyRoutes;
