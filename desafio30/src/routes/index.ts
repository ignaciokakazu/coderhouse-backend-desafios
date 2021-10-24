import express from 'express';
import routesProductos from './routesProductos';
import routesHb from './routes-hb';
import {errorHandler} from '../middleware/error';
// import routesLogin from './login';
// import routesSignup from './signup';
import routesFB from './authFB';
import routesInfo from './info';
import config from '../config/config';
import os from 'os';
import {Request, Response} from 'express';
import {PORT} from '../config/config';

const mainRouter = express.Router();

mainRouter.use(errorHandler);
mainRouter.use('/auth', routesFB)
// mainRouter.use('/login', routesLogin)
mainRouter.use('/api', routesProductos)
mainRouter.use('/info', routesInfo)
// mainRouter.use('/signup', routesSignup)

// mainRouter.get('/', (req:Request, res:Response)=> {
//     res.json({
//         pid: process.pid,
//         memoryUsage: process.memoryUsage(),
//         numCPUs: os.cpus().length,
//         port: PORT
//     })
// })
mainRouter.use('/', routesHb)

export default mainRouter