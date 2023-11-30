import express, { Router } from 'express';
import { protect } from '../middleware/authMiddleware';
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController';


const router: Router = express.Router();

// Register a new user
router.post('/', registerUser);

// Login user
router.post('/login', loginUser);

// Logout user 
router.post('/logout', logoutUser);

// Get user profile || Update user profile
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);


export default router;