import socketIo from 'socket.io';
import classProductos from '../models/classProductos';
import classChat from '../models/classChat';

export const socketProducts = (server) => {
    const io = socketIo(server);

    //instancia el chat
    const chat = new classChat();
    (async () => {
    await chat.setChat()
    })();

    io.on('connection', (socket) => {
      console.log('Nueva Conexion establecida!');
  
      //Carga de productos
      socket.on('productoNuevo', async (data) => {
        const productos = new classProductos();
        await productos.getListaProductos();        
        productos.addProducto(data)
        io.emit('productos', productos.listaProductos);
      });

      /*  CHAT */
      //nueva conexión al chat
      socket.once('chatConnect', async (data) => {
        const msg = await chat.connect(data);
        io.emit('chatConnectMessage', msg);
      });

      //nuevo mensaje
      socket.on('emitNewMessage', async (data) => {
        const msg = await chat.setMessage(data)
        io.emit('receiveNewMessage', msg)
      });
      
      //desconexión del chat
      socket.once('chatDisconnect', async (data) => {
        const msg = await chat.disconnect(data);
        /*console.log(socket.client.id)*/
        //socket.emit('chatDisconnectMessage', msg)
        io.emit('chatDisconnectMessage', msg);
        socket.removeAllListeners('chatConnect')
        socket.removeAllListeners('emitMessage')
        socket.removeAllListeners('emitNewMessage')
        socket.removeAllListeners('chatDisconnect')
      });
  });

  return io;
}