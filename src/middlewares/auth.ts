import { RequestHandler } from "express";
import UnauthorizedError from "../errors/Unauthorized";
import jwt from 'jsonwebtoken';
import User from "../models/User";

const authMiddleware: RequestHandler = async (req, res, next) => {
    const header = req.headers.authorization;
    if(!header) throw new UnauthorizedError();
    
    const token = header.split(' ')[1];
    if(!token) throw new UnauthorizedError();

    try {
        const data = jwt.verify(token, process.env.JWT_PRIVATE) as any;
        const user = await User.findOne(data['userId']);

        if(!user) throw Error('No user');

        req.user = user;
        next();
    } catch (e) {
        throw new UnauthorizedError();
    }
    
}

export default authMiddleware;

declare global {
    namespace Express {
        interface Request {
            user: User | undefined;
        }
    }
}