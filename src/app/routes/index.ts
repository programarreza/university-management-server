import { Router } from 'express';
import academicFacultyRoutes from '../modules/academicFaculty/academicFaculty.route';
import AcademicSemesterRoutes from '../modules/academicSemester/academicSemester.route';
import StudentRoutes from '../modules/student/student.router';
import UserRoutes from '../modules/user/user.route';
import academicDepartmentRoutes from '../modules/academicDepartment/academicDepartment.route';
import FacultyRoutes from '../modules/Faculty/faculty.route';
import AdminRoutes from '../modules/Admin/admin.route';
import courseRoutes from '../modules/Course/course.route';
import semesterRegistrationRoutes from '../modules/semesterRegistration/semesterRegistration.route';
import offeredCourseRoutes from '../modules/OfferedCourse/offeredCourse.route';
import authRoutes from '../modules/Auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/courses',
    route: courseRoutes,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-courses',
    route: offeredCourseRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
