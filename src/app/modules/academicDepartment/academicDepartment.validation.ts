import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be string ',
      required_error: 'Name is Required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty must be string ',
      required_error: 'academicFaculty is Required',
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Department must be string ',
        required_error: 'Name is Required',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Faculty must be string ',
        required_error: 'academicFaculty is Required',
      })
      .optional(),
  }),
});

export {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
