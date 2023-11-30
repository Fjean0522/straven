import { log } from "console";
import User from "../models/user";
import generateToken from "../utils/generateToken";
import { Request, Response } from "express"


// Task:   Register new user
// Route:  POST /api/users 
// Access: Public
const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
    
        // Check if user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        };

        // Else create new user
        const user = await User.create({
            name,
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

    } catch (error) {
        console.log(error);
    };
};


// Task:   Authenticate / Login user
// Route:  POST /api/users/login 
// Access: Public
const loginUser = async (req: Request, res: Response) => {
    
};


// Task:   Authenticate / Login user
// Route:  POST /api/users/logout 
// Access: Public
const logoutUser = async (req: Request, res: Response) => {
    
};


// Task:   Get user profile
// Route:  GET /api/users/profile 
// Access: Private
const getUserProfile = async (req: Request, res: Response) => {
    
};


// Task:   Update user profile
// Route:  PUT /api/users/profile
// Access: Private
const updateUserProfile = async (req: Request, res: Response) => {
    
};


export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};
