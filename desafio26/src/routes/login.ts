import express from 'express';
import {Request, Response } from "express";
import {Login} from '../models/classLogin';

const router = express.Router();

router.get('/contador', Login.getContador);

router.get('/info', Login.getInfo);

router.get('/set', Login.set);

router.get('/clear', Login.clear);

router.get('/get', Login.get);

router.get('/', (request: Request, response: Response)=> {
    response.render('login')
});

export default router;

