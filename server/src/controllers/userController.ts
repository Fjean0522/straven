import { Request, Response } from "express"


// Task:   Register new user
// Route:  POST /api/users 
// Access: Public
const registerUser = (req: Request, res: Response) => {
    
};


// Task:   Authenticate / Login user
// Route:  POST /api/users/login 
// Access: Public
const loginUser = (req: Request, res: Response) => {
    
};


// Task:   Authenticate / Login user
// Route:  POST /api/users/logout 
// Access: Public
const logoutUser = (req: Request, res: Response) => {
    
};


// Task:   Get user profile
// Route:  GET /api/users/profile 
// Access: Private
const getUserProfile = (req: Request, res: Response) => {
    
};


// Task:   Update user profile
// Route:  PUT /api/users/profile
// Access: Private
const updateUserProfile = (req: Request, res: Response) => {
    
};


export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};
