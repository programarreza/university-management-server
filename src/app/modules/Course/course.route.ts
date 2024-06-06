import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  assignFacultyWithCourse,
  createCourse,
  deleteCourse,
  getAllCourses,
  getSingleCourse,
  removeFacultyFromCourse,
  updateCourse,
} from './course.controller';
import {
  createCourseValidationSchema,
  facultyWithCourseValidationSchema,
  updateCourseValidationSchema,
} from './course.validation';

const courseRoutes = express.Router();

courseRoutes.post(
  '/create-course',
  validateRequest(createCourseValidationSchema),
  createCourse,
);

courseRoutes.get('/', getAllCourses);
courseRoutes.get('/:id', getSingleCourse);
courseRoutes.delete('/:id', deleteCourse);

courseRoutes.patch(
  '/:id',
  validateRequest(updateCourseValidationSchema),
  updateCourse,
);

courseRoutes.put(
  '/:courseId/assign-faculties',
  validateRequest(facultyWithCourseValidationSchema),
  assignFacultyWithCourse,
);

courseRoutes.delete(
  '/:courseId/remove-faculties',
  validateRequest(facultyWithCourseValidationSchema),
  removeFacultyFromCourse,
);

export default courseRoutes;
