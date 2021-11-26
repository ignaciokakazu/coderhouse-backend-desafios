import mongoose, {Connection} from 'mongoose';
import {
  NewProductoInterface,
  ProductoInterface,
//   ProductBaseClass,
//   ProductQuery,
} from '../../productos.interfaces';
import Config from '../../../config/config';
import {MongoAtlas} from '../../../services/mongoDb'
export const productsSchema = new mongoose.Schema<ProductoInterface>({
//   nombre: String,
//   precio: Number,
// _id: String,
  nombre: String,
  descripcion: String,
  codigo: String,
  foto: String,
  precio: Number,
  stock: Number,
  timestamp: String
});

export class ProductosMongoDAO {//implements ProductBaseClass {
  private connection: Connection;
  private productos;

  constructor(local: boolean = false) {
    if (local) {
      // this.carrito = MongoLocal,getConnection();
      this.connection = MongoAtlas.getConnection();
    } else {
      this.connection = MongoAtlas.getConnection();
    }

    this.productos = this.connection.model<ProductoInterface>('producto', productsSchema);
  }

  async getProductosAll() {
    return await this.productos.find();
  }

  async getProductosById(id:number) {
    return await this.productos.find({id:id});
  }

  async insertProducto(data: NewProductoInterface) {
    const count = await this.productos.count();
    const id = count + 1;
    const obj = {
        id: id,
        nombre: data.nombre,
        descripcion: data.descripcion,
        codigo: data.codigo,
        foto: data.foto,
        precio: data.precio,
        stock: data.stock,
        timestamp: new Date()
    }

    const newProduct = new this.productos(obj);
    await newProduct.save();

    return obj;
  }

  async updateProducto(id: number, newProductData: any) {
    //return this.productos.findByIdAndUpdate(id, newProductData);
    const filter = {id: id}
    return this.productos.findOneAndUpdate(filter, newProductData);
  }

  async deleteProducto(id: number) {
      const filter = {id:id}
    await this.productos.deleteOne(filter);
  }

}