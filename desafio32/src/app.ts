import config from './config/config'
import { socketProducts } from './services/socket'; //socket io
import myServer from './services/server';
import { Server } from 'socket.io';
import minimist from 'minimist';
import cluster from 'cluster';
import os from 'os';
import {PORT} from './config/config';
import logger from './utils/logger';

const io = new Server(myServer);

socketProducts(io);

/* FORK O CLUSTER */
const argv = minimist(process.argv.slice(2));
const modo = argv._[2] ? argv._[2].replace('SERVER=', '') : "FORK";
// export const PORT = argv.puerto || 8080;

// myServer.listen(PORT, ()=> console.log(`server up ${PORT}`));
if (modo === 'FORK') {

    myServer.listen(PORT, () => logger.info(`Server Up port ${PORT}`));

    logger.info(process.pid);
    process.on('exit', (code)=> {
        logger.info(`Código de salida: ${code}`);
    })

} else {

    if (cluster.isMaster) {
        const numCPU = os.cpus().length
        logger.info(`NÚMERO DE CPUS => ${numCPU}`);
        logger.info(`PID MASTER => ${process.pid}`);

        for (let i=0;i<numCPU;i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker)=> {
            logger.info(`Worker ${worker.process.pid} died at ${new Date()}`);
            cluster.fork();
        })
    }

        myServer.listen(PORT, () => logger.info(`Server Up port ${PORT} - PID WORKER ${process.pid}`));
    
}