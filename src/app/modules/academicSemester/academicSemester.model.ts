import { Schema, model } from 'mongoose';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';
import {
  TAcademicSemester,
  TAcademicSemesterNameCodeMapper,
} from './academicSemester.interface';
import AppError from '../../errors/AppError';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: AcademicSemesterName,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      required: true,
    },
  },
  { timestamps: true },
);

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExists) {
    throw new AppError(404, 'Semester is already exists !');
  }
  next();
});

academicSemesterSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate() as TAcademicSemesterNameCodeMapper;

  if ( update.name && update.code ) {
    const isSemesterExists = await AcademicSemester.findOne({
      name: update.name,
      code: update.code,
    });

    if (isSemesterExists) {
      throw new AppError(404, 'Semester is already exists !');
    }
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
