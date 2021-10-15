import express from 'express';
import {calculo} from '../utils/procesoFork';
import {fork} from 'child_process';
import path from 'path';

const router = express.Router();
/* DESAFIO 28 */


router.get('/', (req, res)=> {
    res.json({
        argv: process.argv.slice(2),
        pid: process.pid,
        node: process.version,
        title: process.title,
        platform: process.platform,
        path: process.cwd(),
        memoryUsage: process.memoryUsage()
    })
})

//no olvidar esta parte
const scriptPath = path.resolve(__dirname, '../utils/procesoFork.js');

router.get('/random', (req, res)=> {
    const cantidad = req.query.cantidad || 1000000;

    //acá ejecuta en fork
    const procesoFork = fork(scriptPath, [cantidad]);
    procesoFork.send('start');
    procesoFork.on('message', (resultado)=> {
        res.json(resultado);
    })
});





export default router