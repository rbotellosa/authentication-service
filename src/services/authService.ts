import * as userModel from '../models/userModel';
import bcrypt from 'bcrypt';

export const authenticateUser = async (username: string) => {
  const user = await userModel.findUser(username);
};
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10; // Or another number you deem appropriate
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
}
