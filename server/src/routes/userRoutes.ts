import express, { Router } from 'express'
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController';


const router: Router = express.Router();

// Register a new user
router.post();

// Login user
router.post();

// Logout user 
router.post();

// Get user profile || Update user profile
router.route();


export default router;