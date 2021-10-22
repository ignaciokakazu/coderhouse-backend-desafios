import config from './config/config'
import { socketProducts } from './services/socket'; //socket io
import myServer from './services/server';
import { Server } from 'socket.io';
import minimist from 'minimist';
import cluster from 'cluster';
import os from 'os';

const io = new Server(myServer);

socketProducts(io);

/* FORK O CLUSTER */
const argv = minimist(process.argv.slice(2));
const modo = argv._[2] ? argv._[2].replace('SERVER=', '') : "FORK";
console.log(modo);

if (modo === 'FORK') {

    myServer.listen(config.PORT, () => console.log(`Server Up port ${config.PORT}`));

    console.log(process.pid);
    process.on('exit', (code)=> {
        console.log(`Código de salida: ${code}`);
    })

// } else if (modo === 'CLUSTER') {

//     if (cluster.isMaster) {
//         const numCPU = os.cpus().length
//         console.log(`NÚMERO DE CPUS => ${numCPU}`);
//         console.log(`PID MASTER => ${process.pid}`);

//         for (let i=0;i<numCPU;i++) {
//             cluster.fork();
//         }

//         cluster.on('exit', (worker)=> {
//             console.log(`Worker ${worker.process.pid} died at ${new Date()}`);
//             cluster.fork();
//         })
    } else {

        myServer.listen(config.PORT, () => console.log(`Server Up port ${config.PORT} - PID WORKER ${process.pid}`));

    }
