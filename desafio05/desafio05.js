const http = require('http');

const objeto = () => {
  const obj = {
    id: getRandomInt(10),
    title: "Producto " + getRandomInt(10),
    price: getRandomInt(10),
    thumbnail: getRandomInt(10)
  }
  
  return JSON.stringify(obj);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const server = http.createServer((request, response) => {
  response.end(objeto());
});

server.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
