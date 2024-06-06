import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  createSemesterRegistrationValidationSchema,
  updateSemesterRegistrationValidationSchema,
} from './semesterRegistration.validation';
import {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
} from './semesterRegistration.controller';

const semesterRegistrationRoutes = express.Router();

semesterRegistrationRoutes.post(
  '/create-semester-registration',
  validateRequest(createSemesterRegistrationValidationSchema),
  createSemesterRegistration,
);

semesterRegistrationRoutes.get('/', getAllSemesterRegistrations);
semesterRegistrationRoutes.get('/:id', getSingleSemesterRegistration);
semesterRegistrationRoutes.patch(
  '/:id',
  validateRequest(updateSemesterRegistrationValidationSchema),
  updateSemesterRegistration,
);

export default semesterRegistrationRoutes;
