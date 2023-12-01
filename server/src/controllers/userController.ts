import User from "../models/user";
import generateToken from "../utils/generateToken";
import asyncHandler from 'express-async-handler';
import { Request, Response } from "express";


// Task:   Register new user
// Route:  POST /users 
// Access: Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    };

    // Else create new user
    const user = await User.create({
        username,
        email,
        password
    });

    // Generate token if user was successfully created
    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    };
});


// Task:   Authenticate / Login user
// Route:  POST /users/login 
// Access: Public
const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    //  Check if user is registered in the database
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    };
});


// Task:   Logout user
// Route:  POST /users/logout 
// Access: Public
const logoutUser = asyncHandler(async (req: Request, res: Response) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).json({ message: 'User has Loged out' });
});


// Task:   Get user profile
// Route:  GET /users/profile 
// Access: Private
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
    if (req.user) {
        const user = {
        _id: req.user._id,
        username: req.user.username,
        email: req.user.email
        };  

        res.status(200).json(user);
    };
});


// Task:   Update user profile
// Route:  PUT /users/profile
// Access: Private
const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findById(req.user!._id);

    // Update user info
    if (user) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        
        // Check if a new password is provided
        if (req.body.password) {
            user.password = req.body.password;
        }

        // Resave the user with the updated info
        const updatedUser = await user.save();
        
        res.status(200).json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email
        });
        
    } else {
        res.status(404);
        throw new Error('User not found');
    };
});


export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};
