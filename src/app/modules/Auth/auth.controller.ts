import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { loginUserFromDB } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await loginUserFromDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged Successfully',
    data: result,
  });
});

export { loginUser };
