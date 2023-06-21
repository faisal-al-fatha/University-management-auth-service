/* eslint-disable no-console */
import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

process.on('uncaughtException', error => {
  logger.error('uncaught exception is detected', error)
  process.exit(1)
})

let server: Server

async function bootstrap() {
  try {
    await mongoose.connect(
      'mongodb+srv://university-admin:oAeE3rTmAp7iJeeM@cluster0.eveocjd.mongodb.net/university-management?retryWrites=true&w=majority'
    )
    logger.info('Database connection established')

    server = app.listen(config.port, () => {
      logger.info(`application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(
      'Database connection failed: ' +
        error +
        ` But got the connection from ${config.database_url}`
    )
  }
  process.on('unhandledRejection', error => {
    logger.error(
      'unhandled Rejection is detected, we are closing our server ..... ',
      error
    )
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
