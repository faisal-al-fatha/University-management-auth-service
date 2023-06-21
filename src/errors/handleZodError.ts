import { ZodError, ZodIssue } from 'zod'
import IGenericErrorMessage from './errorInterface'
import { IGenericErrorResponse } from './genericErrorResponse'

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })

  const statusCode = 400

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}

export default handleZodError