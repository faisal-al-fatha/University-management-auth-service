import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser) => {
  // have to create auto generated  incremental users id & dfault password
  const id = await generateUserId()

  user.id = id

  //   default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'User not created')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
