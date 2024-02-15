import {findUser, getUsers, create, UserCreds } from '../models/userModel'
import {validateUser} from '../utils/validationUtils'
import { hashPassword } from './authService';

export const createUser = async (userData: UserCreds) => {
  if (validateUser(userData)) {
    userData.password = await hashPassword(userData.password);
    
    try {
      const newUserProfile = await create(userData);
      return newUserProfile;
    } catch (error: any) {
      if (error.message.includes('already exists') || error.message.includes('already in use')) {
        throw error;
      } else {
        throw new Error('Error creating user');
      }
    }
  } else {
    throw new Error('Invalid user data');
  }
};
export const getUserByUsername = async (username: string) => {
    const userProfile = await findUser(username);
    return userProfile;
}
export const getAllUsers = async () => {
    let allUsers = await getUsers();
    allUsers = allUsers.map((user) => {
      return user.username;
    })
    console.log(allUsers);
    return allUsers;
}

