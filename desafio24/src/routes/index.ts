import express from 'express';
import routesProductos from './routesProductos';
import routesHb from './routes-hb';
import {errorHandler} from '../middleware/error';
import routesLogin from './login';

const mainRouter = express.Router();

mainRouter.use(errorHandler);
mainRouter.use('/login', routesLogin)
mainRouter.use('/api', routesProductos)
mainRouter.use('/', routesHb)

export default mainRouter