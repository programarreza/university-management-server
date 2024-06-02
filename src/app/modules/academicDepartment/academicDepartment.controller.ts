import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsIntoDB,
  getSingleAcademicDepartmentIntoDB,
  updateAcademicDepartmentIntoDB,
} from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await createAcademicDepartmentIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'create academic department is successfully',
    data: result,
  });
});

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result = await getAllAcademicDepartmentsIntoDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: ' academic departments is retrieved successfully',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await getSingleAcademicDepartmentIntoDB(departmentId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'single academic Department is retrieved successfully',
    data: result,
  });
});
const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await updateAcademicDepartmentIntoDB(departmentId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: ' academic Department is updated successfully',
    data: result,
  });
});

export {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
