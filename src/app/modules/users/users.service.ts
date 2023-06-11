import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

export const createUserToDb = async (user: IUser) => {
  // have to create auto generated  incremental users id & dfault password
  const id = await generateUserId()

  user.id = id

  //   default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('User not created')
  }
  return createdUser
}
