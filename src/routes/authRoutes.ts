import { Router } from 'express';
import  authController from '../controllers/authController';

const router = Router();

// Route for user login
router.post('/login', authController.login);

// Route for user registration
router.post('/register', authController.register);

// Route for user logout
router.post('/logout', authController.logout);

// Route for password reset
router.post('/reset-password', authController.resetPassword);

// Route for token authenticatino
router.post('/auth', authController.authenticate);

export default router;