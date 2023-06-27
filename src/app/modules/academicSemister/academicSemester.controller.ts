import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
// import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../catchAsync'
import sendResponse from '../../../sendResponse'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterService } from './academicSemester.service'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Aademic semester created successfully!',
      data: result,
    })
    next()
  }
)

export const AcademicSemesterController = {
  createSemester,
}
