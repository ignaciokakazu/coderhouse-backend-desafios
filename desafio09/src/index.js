import express from "express"
import classProductos from "./model/classProductos"

const puerto = 8080;
const app = express();

const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

app.get('/api/productos/listar', (request, response) => {
    (async () => {
        const productos = new classProductos("./productos.txt");
        await productos.getListaProductos();
        response.json(productos.listaProductos)
    })();
    
})

app.get('/api/productos/listar/:id', (request, response) => {
    (async () => {
        const productos = new classProductos("./productos.txt");
        await productos.getListaProductos();
        const id = request.params.id
        //console.log(id)
        const productoListado = productos.getProducto(id)
        
        let msg;
        if (productoListado.length != 0 ) {
            msg = productoListado;
        } else if (productos.listaProductos.length == 0) {
            msg = {error : 'no hay productos cargados'}
        } else {
            msg = {error : 'producto no encontrado'}
        }
        
        response.json(msg)
    })();
})


// instanciar la clase, me conviene hacerlo adentro o afuera de la función? 
// Se usa instanciarlo afuera para que sea global? (y las 3 funciones utilizan el mismo objeto)
// afecta la performance? 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/api/productos/guardar', (req, res) => {
    const body = req.body;

    (async () => {
        const productos = new classProductos("./productos.txt");
        await productos.getListaProductos()
        productos.addProducto(body)

        res.json({
            producto: body
        });
    })();
});