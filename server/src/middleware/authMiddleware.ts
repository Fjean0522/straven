import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User';
import { Request, Response, NextFunction } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        user?: JwtPayload;
    }
}

export const protect = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;

    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload;

            req.user = await User.findById(decoded.userId).select('-password');
            next();

        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, invalid token');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});
