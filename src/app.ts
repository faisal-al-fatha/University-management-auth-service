/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewires/globalErrorHandler'
import routes from './app/routes'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/', routes)

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // Promise.reject(new Error('Unhandeled promise rejection'))

  res.send('University Management Server is running')
  // throw new ApiError(400, 'Something went wrong')
  // // next('error come from nextfunction')
})

// global error handler
app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  })
})

export default app
