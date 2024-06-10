import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  changePasswordValidationSchema,
  loginValidationSchema,
  refreshTokenValidationSchema,
} from './auth.validation';
import { changePassword, loginUser, refreshToken } from './auth.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const authRoutes = Router();

authRoutes.post('/login', validateRequest(loginValidationSchema), loginUser);
authRoutes.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validateRequest(changePasswordValidationSchema),
  changePassword,
);

authRoutes.post(
  '/refresh-token',
  validateRequest(refreshTokenValidationSchema),
  refreshToken
);

export default authRoutes;
