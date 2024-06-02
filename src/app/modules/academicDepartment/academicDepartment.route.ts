import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
} from './academicDepartment.controller';
import {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
} from './academicDepartment.validation';

const academicDepartmentRoutes = express.Router();

academicDepartmentRoutes.post(
  '/create-academic-department',
  validateRequest(createAcademicDepartmentValidationSchema),
  createAcademicDepartment,
);

academicDepartmentRoutes.get('/', getAllAcademicDepartments);
academicDepartmentRoutes.get('/:departmentId', getSingleAcademicDepartment);

academicDepartmentRoutes.patch(
  '/:departmentId',
  validateRequest(updateAcademicDepartmentValidationSchema),
  updateAcademicDepartment,
);

export default academicDepartmentRoutes;
