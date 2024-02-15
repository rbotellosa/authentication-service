import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.post('/', userController.createProfile)

router.get('/profile', userController.getProfile);

router.get('/profiles', userController.getAllUsers)

router.put('/profile', userController.updateProfile);

router.delete('/:userId', userController.deleteUser);

export default router;
