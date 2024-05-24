import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import studentRouter from './app/modules/student/student.router';
import userRouter from './app/modules/user/user.route';

const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello PH University');
});

export default app;
