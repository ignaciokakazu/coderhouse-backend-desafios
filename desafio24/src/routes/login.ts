import express from 'express';
import {Request, Response } from "express";
import {Login} from '../models/classLogin';

const router = express.Router();

router.get('/set', Login.set);

router.get('/clear', Login.clear);

router.get('/', (request: Request, response: Response)=> {
    response.render('login')
});

export default router;

