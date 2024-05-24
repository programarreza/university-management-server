import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import studentRouter from './app/modules/student/student.router';

const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', studentRouter);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
