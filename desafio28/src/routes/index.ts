import express from 'express';
import routesProductos from './routesProductos';
import routesHb from './routes-hb';
import {errorHandler} from '../middleware/error';
// import routesLogin from './login';
// import routesSignup from './signup';
import routesFB from './authFB';
import routesInfo from './info';

const mainRouter = express.Router();

mainRouter.use(errorHandler);
mainRouter.use('/auth', routesFB)
// mainRouter.use('/login', routesLogin)
mainRouter.use('/api', routesProductos)
mainRouter.use('/info', routesInfo)
// mainRouter.use('/signup', routesSignup)
mainRouter.use('/', routesHb)

export default mainRouter