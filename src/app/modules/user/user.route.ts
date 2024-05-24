import express from 'express';
import { createStudent } from './user.controller';

const UserRoutes = express.Router();

UserRoutes.post('/create-student', createStudent);

export = UserRoutes;
