import express from 'express';
import routesProductos from './routesProductos';
import routesHb from './routes-hb';
import {errorHandler} from '../middleware/error';

const mainRouter = express.Router();

mainRouter.use(errorHandler);
mainRouter.use('/api', routesProductos)
mainRouter.use('/', routesHb)

export default mainRouter