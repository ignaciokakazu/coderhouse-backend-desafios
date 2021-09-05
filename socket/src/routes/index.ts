import express from 'express';
import routesHb from './routes-hb';

const mainRouter = express.Router();

mainRouter.use('/', routesHb)

export default mainRouter