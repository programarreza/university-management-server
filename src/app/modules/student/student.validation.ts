import { z } from 'zod';

// User Name Validation Schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, { message: 'First name can be more than 20 characters' })
    .regex(/^[A-Z][a-z]*$/, {
      message: 'First name is not in capitalize format',
    })
    .min(1, { message: 'First name is required' }),

  middleName: z.string().optional().or(z.literal('')),

  lastName: z
    .string()
    .regex(/^[A-Za-z]+$/, { message: 'Last name is not valid' })
    .min(1, { message: 'Last name is required' }),
});

// Guardian Validation Schema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'fatherName is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'fatherOccupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'fatherContactNo is required' }),
  motherName: z.string().min(1, { message: 'motherName is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'motherOccupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'motherContactNo is required' }),
});

// Local Guardian Validation Schema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'name is required' }),
  occupation: z.string().min(1, { message: 'occupation is required' }),
  contactNo: z.string().min(1, { message: 'contactNo is required' }),
  address: z.string().min(1, { message: 'address is required' }),
});

// Student Validation Schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema.refine((data) => data !== undefined, {
        message: 'name is required',
      }),
      gender: z.enum(['male', 'female', 'other'], {
        errorMap: () => ({
          message:
            "gender is not valid. The gender field can only be one of the following: 'male', 'female', 'other'",
        }),
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .email({ message: 'email is not a valid email type' })
        .min(1, { message: 'email is required' }),
      contactNo: z.string().min(1, { message: 'contactNo is required' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'emergencyContactNo is required' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional()
        .refine((data) => data !== undefined, {
          message:
            "bloodGroup is not valid. The bloodGroup field can be one of the following: 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
        }),
      presentAddress: z
        .string()
        .min(1, { message: 'presentAddress is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'permanentAddress is required' }),
      guardian: guardianValidationSchema.refine((data) => data !== undefined, {
        message: 'guardian is required',
      }),
      localGuardian: localGuardianValidationSchema.refine(
        (data) => data !== undefined,
        { message: 'localGuardian is required' },
      ),
      profileImg: z.string().optional().or(z.literal('')),
    }),
  }),
});

export { createStudentValidationSchema };
