import db from '../../config/dbConfig';

export interface UserCreds {
  id: number;
  username: string;
  password: string;
  email: string;
}
export const create = async (userData: UserCreds) => {
  const usernameExists = await db('Users')
    .where({ username: userData.username })
    .first();
  if (usernameExists) {
    throw new Error(`Username: ${userData.username} already exists`)
  }
  const emailExists = await db('Users')
    .where({email: userData.email})
    .first();
  if (emailExists){
    throw new Error(`Email: ${userData.email} already in use`)
  }
  const [newUserProfile] = await db('Users').insert(userData).returning('*');
  return newUserProfile;
};
export const findUser = async (username: string) => {
  try {
    const user = await db('Users')
          .select('*')
          .where({ username })
          .first();
    return user

  } catch (error:any) {
    console.error(error.message)
  }
};
export const getUsers = async () => {
  const users = await db('Users');
  console.log(users)
  return users;
}