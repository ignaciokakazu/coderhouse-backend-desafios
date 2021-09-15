import {mensajesMongo} from '../services/mongodb';

class DBMensajes {
    async getAll() {
      return await mensajesMongo.find({});
    }
  
    async insert(data) {
      console.log(data)
      return mensajesMongo.create(data);
    }
  }

export const DBService = new DBMensajes();

// import mongoose from "mongoose";

// const mensajesCollection = 'mensajes';

// const mensajesSchema = new mongoose.Schema({
//     id: {type: Number, required: true, unique:true},
//     username: {type: String, required: true},
//     message: {type: String, required: true},
//     timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
// });

// export const DBService = new mongoose.model(mensajesCollection, mensajesSchema);