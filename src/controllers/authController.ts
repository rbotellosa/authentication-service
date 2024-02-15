import { Request, Response } from 'express';
import * as authService from '../services/authService';
import * as userService from '../services/userService'

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await userService.getUserByUsername(username)
      if (!user){
        return res.status(401).json({error: 'Invalid username or passowrd'})
      }
      const userHashedPassword = user.password;
      const isMatch = await authService.comparePassword(password, userHashedPassword)
      if (!isMatch){
        return res.status(401).json({error: 'Invalid username or passwword'})
      }
      return res.status(200).json({message: `Hello ${username} you have logged in`});
    } catch (error: any) {
      res.status(500).json({error: error.message || 'Internal server error'})
    }
  }
  register(req: Request, res: Response) {
  }
  logout(req: Request, res: Response) {
  }
  resetPassword(req: Request, res: Response) {
  }
}

export default new AuthController();
