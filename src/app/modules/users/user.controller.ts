import { NextFunction, Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../catchAsync'
import sendResponse from '../../../sendResponse'
import { IUser } from './user.interface'
import { UserService } from './user.service'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = await UserService.createUser(user)

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully!',
      data: result,
    })
    next()
  }
)
export const UserController = {
  createUser,
}
