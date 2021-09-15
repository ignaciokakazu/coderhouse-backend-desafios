import {productosMongo} from '../services/mongodb';

class DBProductos {
  async getAll() {
    const lista = await productosMongo.find({});
    return lista;
  }

  async getProductById(id) {
    const lista = await productosMongo.find({id:id})
    return lista;
  }

  async getCount() {
    return await productosMongo.count({});
  }
  
  async insert(data) {    
    await productosMongo.create(data);
  }

  async delete(id) {
    await productosMongo.deleteOne({id:id});
  }

  async update(id, producto) {
    await productosMongo.findOneAndUpdate({id: id}, producto);
    //await mySQLDB('productos').where({id: id}).update(producto);
  }
}

export const DBService = new DBProductos();

// import mongoose from 'mongoose';

// const productosCollection = 'productos';

// const productosSchema = new mongoose.Schema({
//     id: {type: Number, required: true, unique:true},
//     nombre: {type: String, required: true},
//     descripcion: {type: String, required: true},
//     price: {type: Number, required: true},
//     stock: {type: Number, required: true},
//     thumbnail: {type: String, required: true},
//     timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
// });

// export const DBService = new mongoose.model(productosCollection, productosSchema);