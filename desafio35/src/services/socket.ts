// import * as socketIo from 'socket.io';
// import * as http from 'http';
//import classProductos from '../models/classProductos';
import classChat from './../models/classChat'
import {SmsService} from './twilio';

export const socketProducts = (io: any) => {
    //instancia el chat
    const chat:any = new classChat();
     (async () => {
     await chat.setChat()
     })();

    io.on('connection', (socket:any) => {
      console.log('Nueva Conexion establecida!');
  
    //   //Carga de productos
    //   socket.on('productoNuevo', async (data:any) => {
    //     const productos:any = new classProductos();
    //     await productos.getListaProductos();        
    //     productos.addProducto(data)
    //     io.emit('productos', productos.listaProductos);
    //   });

      /*  CHAT */
      //nueva conexión al chat
      socket.once('chatConnect', async (data:any) => {
        const msg:any = await chat.connect(data);
        const msgAll = await chat.getAll();
        io.emit('chatConnectMessage', msgAll);
      });

      //nuevo mensaje
      socket.on('emitNewMessage', async (data:any) => {
        const msg:any = await chat.setMessage(data)
        console.log(msg);
        msg.message.indexOf('administrador')>-1? SmsService.sendMessage(msg.author.email + " dijo " + msg.message) : null;
        io.emit('receiveNewMessage', msg)
      });
      
      //desconexión del chat
      socket.once('chatDisconnect', async (data:any) => {
        const msg:any = await chat.disconnect(data);
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