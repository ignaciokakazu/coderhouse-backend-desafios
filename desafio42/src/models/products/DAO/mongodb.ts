import mongoose, {Connection} from 'mongoose';
import {
  NewProductoInterface,
  ProductoInterface,
//   ProductBaseClass,
//   ProductQuery,
} from '../../products/productos.interfaces'
import Config from '../../../config/config';
import {MongoAtlas} from '../../../services/mongoDb';
import ProductosDTO from '../../products/productos.dto';

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

  async getProductosById(id:number): Promise<ProductosDTO> {
    const coso = await this.productos.find({id:id}).lean().exec();
    return new ProductosDTO(coso[0]);
  }


  async insertProducto(data: NewProductoInterface) {
    const count = await this.productos.count();
    const id = count + 1;
    const obj = {
        _id: id.toString(),
        nombre: data.nombre,
        descripcion: data.descripcion,
        codigo: data.codigo,
        foto: data.foto,
        precio: data.precio,
        stock: data.stock,
        timestamp: (new Date()).toString()
    }

    const newProduct = new this.productos(obj);
    await newProduct.save();

    return new ProductosDTO(obj);
  }

  async updateProducto(id: number, newProductData: any): Promise<ProductosDTO> {
    //return this.productos.findByIdAndUpdate(id, newProductData);
    const filter = {id: id}
    return new ProductosDTO(await this.productos.findOneAndUpdate(filter, newProductData).lean().exec());
  }

  async deleteProducto(id: number) {
      const filter = {id:id}
    await this.productos.deleteOne(filter);
  }

}