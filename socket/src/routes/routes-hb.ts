import express from "express";
import {Request, Response} from "express";

const router = express.Router();

router.get('/', (request: Request, response: Response) => {
    response.render('main')
  });


export default router