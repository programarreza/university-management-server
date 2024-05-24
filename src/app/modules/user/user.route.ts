import express from 'express';
import { createStudent } from './user.controller';

const userRouter = express.Router();

userRouter.post('/create-student', createStudent);

export = userRouter;
