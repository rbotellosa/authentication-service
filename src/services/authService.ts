import * as userModel from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// In production store SECRET_KEY in SSM
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key_here';

export const generateJWT = async (username: string): Promise<string> => {
  const token = jwt.sign(
    {userId: username},
    SECRET_KEY,
    {expiresIn:'10h'}
  );
  return token;
};
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
}
