import config from './config/config'
import { socketProducts } from './services/socket'; //socket io
import myServer from './services/server';
import { Server } from 'socket.io';


const io = new Server(myServer);

socketProducts(io);


myServer.listen(config.PORT, () => console.log(`Server Up port ${config.PORT}`));