import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { updateAdminValidationSchema } from './admin.validation';
import {
  deleteAdmin,
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
} from './admin.controller';

const AdminRoutes = express.Router();

AdminRoutes.get('/', getAllAdmins);
AdminRoutes.get('/:id', getSingleAdmin);
AdminRoutes.patch(
  '/:id',
  validateRequest(updateAdminValidationSchema),
  updateAdmin,
);
AdminRoutes.delete('/:id', deleteAdmin);

export default AdminRoutes;
