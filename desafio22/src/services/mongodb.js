import mongoose from 'mongoose';

const mensajesCollection = 'mensajes';

const mensajesSchema = new mongoose.Schema({
    username: {type: String, required: true},
    message: {type: String, required: true},
    timestamp: { type: String, required: true} //currentTime: () => Math.floor(Date.now() / 1000) }
});

export const mensajesMongo = new mongoose.model(mensajesCollection, mensajesSchema);

const productosCollection = 'productos';

const productosSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique:true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    thumbnail: {type: String, required: true},
    category_id: {type: Number, required: true},
    timestamp: {type: String, required: true}//{ currentTime: () => Math.floor(Date.now() / 1000) }
});

export const productosMongo = new mongoose.model(productosCollection, productosSchema);

( async () => {
    
  try {
    const URL = 'mongodb://localhost:27017/ecommerce';
    let rta = await mongoose.connect(URL, {
//        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("DB CONNECTED!!!");
      

  } catch (e) {
    console.log("Error: " + e.message);
  }
})()

