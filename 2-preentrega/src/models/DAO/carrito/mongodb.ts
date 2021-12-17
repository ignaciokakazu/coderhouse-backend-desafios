import mongoose from 'mongoose';
import {CarritoInterface, NewCarritoInterface} from '../../carrito.interfaces';
import Config from '../../../config/config';
import Moment from 'moment';

const carritoSchema = new mongoose.Schema<CarritoInterface>({
    timestamp: String,
    user: String,
    producto: [{
        id: String,
        nombre: String,
        descripcion: String,
        codigo: String,
        foto: String,
        precio: Number,
        cantidad: Number,
        timestramp: String
    }]
});


export class CarritoMongoDAO {//implements ProductBaseClass {
  private srv: string;
  private carrito;

  constructor(local: boolean = false) {
    if (local)
      this.srv = `mongodb://localhost:27017/${Config.MONGO_LOCAL_DBNAME}`;
    else
      this.srv = `mongodb+srv://${Config.MONGO_ATLAS_USER}:${Config.MONGO_ATLAS_PASSWORD}@${Config.MONGO_ATLAS_CLUSTER}/${Config.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`;
    mongoose.connect(this.srv);
    this.carrito = mongoose.model<CarritoInterface>('carrito', carritoSchema);
  }

  async getCarritoAll() {
      console.log('hola getCarrito All')
    return await this.carrito.find();
  }

  async getCarritoById(id:number) {
    return await this.carrito.find({id:id});
  }

  async setCarrito(data: NewCarritoInterface): Promise<string>{
    const newProduct = new this.carrito(data);
    let id:string = "";
    await newProduct.save(function(err,data){
        if (err) {
            console.log('no se pudo grabar')
            throw new Error('no se pudo grabar')
        } 
        console.log(data.id)
        id = data.id;
    });

    return id;
  }

  async setCarritoNuevo(data: NewCarritoInterface): Promise<string>{
    const newProduct = new this.carrito(data);
    let id:string="";
    await newProduct.save(function(err,data){
        if (err) {
            console.log('no se pudo grabar')
            throw new Error('no se pudo grabar')
        } 
        console.log(data.id)
        id = data.id;
    });

    return id;
  }

//   async addCarritoPrueba() {//(data: NewProductoInterface) {
//     console.log('desde mongodb carrito')
//     const obj = {
//         id: "1", 
//         timestamp: Moment().format(),
//         user: 'user',
//         producto: {
//             id: 1,
//             nombre: 'producto1',
//             descripcion: 'descripcion2',
//             codigo: 'codigo1',
//             foto: 'foto',
//             precio: 12,
//             cantidad: 1,
//             timestamp: new Date()
//         }
//     }
//     console.log(obj);
//     const newProduct = new this.carrito(obj);
//     await newProduct.save();

//     return obj;
//   }

  async deleteCarritoById(id:number) {
      await this.carrito.deleteOne({id:id});
  }

//   async updateProducto(id: number, newProductData: any) {
//     //return this.productos.findByIdAndUpdate(id, newProductData);
//     const filter = {id: id}
//     return this.productos.findOneAndUpdate(filter, newProductData);
//   }

//   async deleteProducto(id: number) {
//       const filter = {id:id}
//     await this.productos.deleteOne(filter);
//   }

}