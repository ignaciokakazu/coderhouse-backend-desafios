import myServer from './services/server';
import config from './config/config';
import {infoLogger, peligroLogger} from './services/logger';
import os from 'os';
import cluster from 'cluster';
import minimist from 'minimist';

const PORT = process.env.PORT || config.PORT;

/* FORK O CLUSTER */
const argv = minimist(process.argv.slice(2));
const modo = argv.server;
// export const PORT = argv.puerto || 8080;
console.log(modo);

// myServer.listen(PORT, ()=> console.log(`server up ${PORT}`));
if (modo === 'FORK') {

    myServer.listen(PORT, () => infoLogger.info(`Server Up port modo fork ${PORT}`));

    infoLogger.info(process.pid);
    process.on('exit', (code)=> {
        infoLogger.info(`Código de salida: ${code}`);
    })

} else {

    if (cluster.isMaster && cluster.isPrimary) {
        const numCPU = os.cpus().length
        infoLogger.info(`NÚMERO DE CPUS => ${numCPU}`);
        infoLogger.info(`PID MASTER => ${process.pid}`);

        for (let i=0;i<numCPU;i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker)=> {
            infoLogger.info(`Worker ${worker.process.pid} died at ${new Date()}`);
            cluster.fork();
        })
    }

        myServer.listen(PORT, () => infoLogger.info(`Server Up port modo cluster ${PORT} - PID WORKER ${process.pid}`));
    
}