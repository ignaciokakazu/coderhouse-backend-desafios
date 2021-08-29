/*
Consigna: Realizar un proyecto de servidor basado en node.js que utilice el middleware express 
e implemente tres endpoints en el puerto 8080:
Ruta get '/items' que responda un objeto con todos los productos y su cantidad total 
en el siguiente formato: { items: [productos], cantidad: (cantidad productos) }

Ruta get '/item-random' que devuelva un producto elegido al azar desde un array de productos 
que se encuentran en el archivo 'productos.txt'. El formato de respuesta será: { item: {producto} }

La ruta get '/visitas' devuelve un objeto que indica cuantas veces 
se visitó la ruta del punto 1 y cuantas la ruta del punto 2. Contestar con el 
formato:  { visitas : { items: cantidad, item: cantidad } }
Usar 'productos.txt' del desafío anterior. Ej:

*/

import express from "express";
import fs from "fs";

const puerto = 8080;
const app = express();

const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

let visitasItems = 0;
let visitasItemRandom = 0;

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getProductos = async () => { 
    const data = await fs.promises.readFile('./productos.txt', 'utf-8');
    const dataJson = JSON.parse(data);

    return dataJson;
}

server.on('error', (err) => {
    console.log('ERROR =>', err);
});
    
//RESPUESTA EN FORMATO JSON (API)
app.get('/', (request, response) => {
  console.log(request.query);
  response.json({
    msg: 'Hola Mundo desde el main',
  });
});

app.get('/items/', async (request, response) => {
    visitasItems++;
    const dataJson = await getProductos();
    const cantidadProd = dataJson.length;

    //Martín: hay alguna forma más 'bonita' de hacer esto? Para crear el objeto con variables...
    let tempJson = {
        items: dataJson,
        cantidad: cantidadProd
    };

    response.json(tempJson);
});

app.get('/item-random', async (request, response) => {
    visitasItemRandom++;
    const dataJson = await getProductos();
    const cantidad = dataJson.length;
    const randomInt = getRandomInt(0, cantidad);

    const prod = dataJson[randomInt];

    let tempJson = {
        item: prod
    }

    response.json(tempJson);
});

app.get('/visitas', async (request, response) => {
    let tempJson = {
        items: visitasItems,
        item: visitasItemRandom
    }

    response.json(tempJson);
});

