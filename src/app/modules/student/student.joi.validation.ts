import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, 'capitalize format')
    .required()
    .messages({
      'string.empty': 'First name is required',
      'string.max': 'First name can be more than 20 characters',
      'string.pattern.name': '{#label} is not in capitalize format',
    }),
  middleName: Joi.string().allow(''),
  lastName: Joi.string()
    .pattern(/^[A-Za-z]+$/, 'alpha')
    .required()
    .messages({
      'string.empty': 'Last name is required',
      'string.pattern.name': '{#label} is not valid',
    }),
});

// Guardian Schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': 'fatherName is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': 'fatherOccupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': 'fatherContactNo is required',
  }),
  motherName: Joi.string().required().messages({
    'string.empty': 'motherName is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': 'motherOccupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': 'motherContactNo is required',
  }),
});

// LocalGuardian Schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'name is required',
  }),
  occupation: Joi.string().required().messages({
    'string.empty': 'occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'contactNo is required',
  }),
  address: Joi.string().required().messages({
    'string.empty': 'address is required',
  }),
});

// Student Schema
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'id is required',
  }),
  name: userNameValidationSchema.required().messages({
    'object.base': 'name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only':
      "{#label} is not valid. The gender field can only be one of the following: 'male', 'female', 'other'",
    'string.empty': 'gender is required',
  }),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required().messages({
    'string.empty': 'email is required',
    'string.email': '{#label} is not a valid email type',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'contactNo is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'emergencyContactNo is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only':
        "{#label} is not valid. The bloodGroup field can be one of the following: 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'presentAddress is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'permanentAddress is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'guardian is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'object.base': 'localGuardian is required',
  }),
  profileImg: Joi.string().allow(''),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default  studentValidationSchema;
