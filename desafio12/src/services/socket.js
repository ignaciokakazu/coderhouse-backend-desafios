import socketIo from 'socket.io';
import classProductos from '../models/classProductos';

export const initWsServer = (server) => {
    const io = socketIo(server);
  
    io.on('connection', (socket) => {
      console.log('Nueva Conexion establecida!');
  
      //Carga de productos
      socket.on('productoNuevo', async (data) => {
        const productos = new classProductos("./productos.txt");
        await productos.getListaProductos();
        console.log(productos.listaProductos)
        
        productos.addProducto(data)
        io.emit('productos', productos.listaProductos);
      });
  
    
  });

  return io;
}