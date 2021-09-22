import mongoose from 'mongoose';
import {
  NewProductoInterface,
  ProductoInterface,
//   ProductBaseClass,
//   ProductQuery,
} from '../../productos.interfaces';
import Config from '../../../config/config';

const productsSchema = new mongoose.Schema<ProductoInterface>({
//   nombre: String,
//   precio: Number,
  id: Number,
  nombre: String,
  descripcion: String,
  codigo: String,
  foto: String,
  precio: Number,
  stock: Number,
  timestamp: String
});

export class ProductosMongoDAO {//implements ProductBaseClass {
  private srv: string;
  private productos;

  constructor(local: boolean = false) {
    if (local)
      this.srv = `mongodb://localhost:27017/${Config.MONGO_LOCAL_DBNAME}`;
    else
      this.srv = `mongodb+srv://${Config.MONGO_ATLAS_USER}:${Config.MONGO_ATLAS_PASSWORD}@${Config.MONGO_ATLAS_CLUSTER}/${Config.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`;
    mongoose.connect(this.srv);
    this.productos = mongoose.model<ProductoInterface>('producto', productsSchema);
  }

//   async get(id?: string): Promise<ProductoInterface[]> {
//     let output: ProductoInterface[] = [];
//     try {
//       if (id) {
//         const document = await this.productos.findById(id);
//         if (document) output.push(document);
//       } else {
//         output = await this.productos.find();
//       }

//       return output;
//     } catch (err) {
//       return output;
//     }
//   }

  async getProductosAll() {
    return await this.productos.find();
  }

  async getProductosById(id:number) {
    return await this.productos.find({id:id});
  }

  async insertProducto(data: NewProductoInterface): Promise<number> {
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

    return id;
  }

  async updateProducto(id: number, newProductData: NewProductoInterface): Promise<ProductoInterface> {
    //return this.productos.findByIdAndUpdate(id, newProductData);
    const filter = {id: id}
    return this.productos.findOneAndUpdate(filter, newProductData);
  }

  async deleteProducto(id: number) {
      const filter = {id:id}
    await this.productos.deleteOne(filter);
  }

//   async query(options: ProductQuery): Promise<ProductI[]> {
//     let query: ProductQuery = {};

//     if (options.nombre) query.nombre = options.nombre;

//     if (options.precio) query.precio = options.precio;

//     return this.productos.find(query);
//   }
}