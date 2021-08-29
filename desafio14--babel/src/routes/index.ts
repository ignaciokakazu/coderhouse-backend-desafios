import express from 'express';
import routesProductos from './routesProductos';
import routesHb from './routes-hb';
const mainRouter = express.Router();

mainRouter.use('/api', routesProductos)
mainRouter.use('/', routesHb)

export default mainRouter