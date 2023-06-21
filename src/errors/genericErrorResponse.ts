import IGenericErrorMessage from './errorInterface'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessage: IGenericErrorMessage[]
}
