import validator from 'validator';
import * as userModel from '../models/userModel'

export const validateUser = (userData: userModel.UserCreds): boolean => { 
  if (!validator.isEmail(userData.email)) {
    return false;
  }
  if (!validator.isAlphanumeric(userData.username) || userData.username.length < 3) {
    return false
  } if (!userData.password || userData.password.length < 6) {
    return false
  }
  return true
}