import express from 'express';
import routesProductos from './routesProductos';
import routesHb from './routes-hb';
import {errorHandler} from '../middleware/error';
import routesLogin from './login';
import routesSignup from './signup';

const mainRouter = express.Router();

mainRouter.use(errorHandler);
mainRouter.use('/login', routesLogin)
mainRouter.use('/api', routesProductos)
mainRouter.use('/signup', routesSignup)
mainRouter.use('/', routesHb)

export default mainRouter