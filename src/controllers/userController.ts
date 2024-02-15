import { Request, Response } from 'express';
import * as userService  from '../services/userService'

class User {
  async createProfile(req: Request, res: Response) {
    try {
      const newUserProfile = await userService.createUser(req.body);
      res.status(200).json(newUserProfile)
    } catch (error: any) {
      res.status(500).json({error: error.message || 'An error occurred'})
    }
  }
  async getProfile(req: Request, res: Response) {
    try {
      const userProfile = await userService.getUserByUsername(req.body);
      if (!userProfile) {
        res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(userProfile);
    } catch(error: any) {
        res.status(500).json({ error: error.message || 'An error occurred' });
    }
  }
  async getAllUsers(req: Request, res: Response) {
    try {
        const users = await userService.getAllUsers();
        if (!users || users.length === 0) {
            return res.status(404).json({ error: 'There are no Users' });
        }
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'An error occurred' });
    }
}
  updateProfile(req: Request, res: Response) {

  }
  deleteUser(req: Request, res: Response) {
  }
}

export default new User();