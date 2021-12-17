import config from './config/config'
import { socketProducts } from './services/socket'; //socket io
import myServer from './services/server';
import { Server } from 'socket.io';


const io = new Server(myServer);

socketProducts(io);

/* FORK O CLUSTER */
const argv = require('minimist')(process.argv.slice(2));
// console.log(argv._);
console.log(argv._[3].replace('SERVER=', ''));

myServer.listen(config.PORT, () => console.log(`Server Up port ${config.PORT}`));

console.log(process.pid);
process.on('exit', (code)=> {
    console.log(`Código de salida: ${code}`);
})