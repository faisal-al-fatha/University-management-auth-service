import { Request, Response } from 'express'
import { createUserToDb } from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await createUserToDb(user)
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'failed to create user',
      error,
    })
  }
}

export default {
  createUser,
}
