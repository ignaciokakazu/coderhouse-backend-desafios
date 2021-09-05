// import { socketProducts } from './services/socket'; //socket io
import myServer from './services/server';
import { Server } from 'socket.io';

const io = new Server(myServer);
const port = 8080;

// socketProducts(io);


myServer.listen(port, () => console.log(`Server Up port ${port}`));