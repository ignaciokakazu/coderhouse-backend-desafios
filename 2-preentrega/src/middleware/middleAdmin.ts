import {Request, Response, NextFunction} from 'express';

let admin = false;

export const middleAdmin = (req: Request, res: Response, next: NextFunction) => {
    console.log("middleware admin")
    console.log(admin)
    admin? next() : res.status(403).json({error: "Error de autenticación"})
}