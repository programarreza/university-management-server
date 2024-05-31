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

const AcademicSemesterRoutes = express.Router();

AcademicSemesterRoutes.post(
  '/create-academic-semester',
  validateRequest(createAcademicSemesterValidationSchema),
  createAcademicSemester,
);

AcademicSemesterRoutes.get('/', getAllAcademicSemesters);
AcademicSemesterRoutes.get('/:semesterId', getSingleAcademicSemester);
AcademicSemesterRoutes.patch(
  '/:semesterId',
  validateRequest(updateAcademicSemesterValidationSchema),
  updateAcademicSemester,
);

export default AcademicSemesterRoutes;
