import jwt, { Secret } from 'jsonwebtoken';
import { Response } from 'express';
import { Types } from 'mongoose';

// Create json web token & configure cookie
const generateToken = (res: Response, userId: Types.ObjectId) => {
    const daysToExpire: number = 15;

    const token = jwt.sign({ userId }, process.env.JWT_SECRET as Secret, { expiresIn: '15d' });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Sets to true in production for secure cookies (HTTPS)
        sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'none',
        maxAge: daysToExpire * 24 * 60 * 60 * 1000  
    });
};

export default generateToken;