// // import * as socketIo from 'socket.io';
// // import * as http from 'http';
// //import classProductos from '../models/classProductos';
// import classChat from '../models/classChat';

// export const socketProducts = (io: any) => {
//     //instancia el chat
//     const chat:any = new classChat();
//      (async () => {
//      await chat.setChat()
//      })();

//     io.on('connection', (socket:any) => {
//       console.log('Nueva Conexion establecida!');
  
//     //   //Carga de productos
//     //   socket.on('productoNuevo', async (data:any) => {
//     //     const productos:any = new classProductos();
//     //     await productos.getListaProductos();        
//     //     productos.addProducto(data)
//     //     io.emit('productos', productos.listaProductos);
//     //   });

//       /*  CHAT */
//       //nueva conexión al chat
//       socket.once('chatConnect', async (data:any) => {
//         console.log(data);
//         const msg:any = await chat.connect(data);
//         io.emit('chatConnectMessage', msg);
//       });

//       //nuevo mensaje
//       socket.on('emitNewMessage', async (data:any) => {
//         const msg:any = await chat.setMessage(data)
//         io.emit('receiveNewMessage', msg)
//       });
      
//       //desconexión del chat
//       socket.once('chatDisconnect', async (data:any) => {
//         const msg:any = await chat.disconnect(data);
//         /*console.log(socket.client.id)*/
//         //socket.emit('chatDisconnectMessage', msg)
//         io.emit('chatDisconnectMessage', msg);
//         socket.removeAllListeners('chatConnect')
//         socket.removeAllListeners('emitMessage')
//         socket.removeAllListeners('emitNewMessage')
//         socket.removeAllListeners('chatDisconnect')
//       });
//   });

//   return io;
// }