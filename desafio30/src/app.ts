import config from './config/config'
import { socketProducts } from './services/socket'; //socket io
import myServer from './services/server';
import { Server } from 'socket.io';
import minimist from 'minimist';
import cluster from 'cluster';
import os from 'os';
import {PORT} from './config/config';

const io = new Server(myServer);

socketProducts(io);

/* FORK O CLUSTER */
const argv = minimist(process.argv.slice(2));
const modo = argv._[2] ? argv._[2].replace('SERVER=', '') : "FORK";
// export const PORT = argv.puerto || 8080;

// myServer.listen(PORT, ()=> console.log(`server up ${PORT}`));
if (modo === 'FORK') {

    myServer.listen(PORT, () => console.log(`Server Up port ${PORT}`));

    console.log(process.pid);
    process.on('exit', (code)=> {
        console.log(`Código de salida: ${code}`);
    })

} else {

    if (cluster.isMaster) {
        const numCPU = os.cpus().length
        console.log(`NÚMERO DE CPUS => ${numCPU}`);
        console.log(`PID MASTER => ${process.pid}`);

        for (let i=0;i<numCPU;i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker)=> {
            console.log(`Worker ${worker.process.pid} died at ${new Date()}`);
            cluster.fork();
        })
    }

        myServer.listen(PORT, () => console.log(`Server Up port ${PORT} - PID WORKER ${process.pid}`));

    
}