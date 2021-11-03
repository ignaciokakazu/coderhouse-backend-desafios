import {Request, Response, NextFunction} from 'express';

export const errorHandler = (err:any, req:Request, res:Response, next:NextFunction) =>{
    console.log(err.message);
    console.log(err.stack);
    //return res.status(err.statusCode || 500).send(err.message)
    next();
}