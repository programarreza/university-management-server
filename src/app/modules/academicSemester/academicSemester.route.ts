import express from 'express';
import {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
} from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  createAcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
} from './academicSemester.validation';
import auth from '../../middlewares/auth';

const AcademicSemesterRoutes = express.Router();

AcademicSemesterRoutes.post(
  '/create-academic-semester',
  validateRequest(createAcademicSemesterValidationSchema),
  createAcademicSemester,
);

AcademicSemesterRoutes.get('/', auth('admin'), getAllAcademicSemesters);
AcademicSemesterRoutes.get('/:semesterId', getSingleAcademicSemester);
AcademicSemesterRoutes.patch(
  '/:semesterId',
  validateRequest(updateAcademicSemesterValidationSchema),
  updateAcademicSemester,
);

export default AcademicSemesterRoutes;
