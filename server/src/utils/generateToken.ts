import jwt, { Secret } from 'jsonwebtoken';
import { Response } from 'express';

// Create json web token & configure cookie
const generateToken = (res: Response, userId: string) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET as Secret, { expiresIn: '15d' });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Sets to true in production for secure cookies (HTTPS)
        sameSite: 'none',
        maxAge: 1296000000  // 15 days in milliseconds
    });
};

export default generateToken;