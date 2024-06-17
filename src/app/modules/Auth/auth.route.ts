import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  changePasswordValidationSchema,
  forgetPasswordValidationSchema,
  loginValidationSchema,
  refreshTokenValidationSchema,
  resetPasswordValidationSchema,
} from './auth.validation';
import {
  changePassword,
  forgetPassword,
  loginUser,
  refreshToken,
  resetPassword,
} from './auth.controller';
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
  refreshToken,
);

// forget password
authRoutes.post(
  '/forget-password',
  validateRequest(forgetPasswordValidationSchema),
  forgetPassword,
);

// reset password
authRoutes.post(
  '/reset-password',
  validateRequest(resetPasswordValidationSchema),
  resetPassword,
);

export default authRoutes;
