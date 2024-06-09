import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { loginValidationSchema } from './auth.validation';
import { loginUser } from './auth.controller';

const authRoutes = Router();

authRoutes.post('/login', validateRequest(loginValidationSchema), loginUser);

export default authRoutes;
