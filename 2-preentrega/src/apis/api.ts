// import { NewProductoInterface, ProductoInterface } from '../models/interfaces';
// import { ProductQuery } from '../models/interfaces';
import {ProductosFactoryDAO} from '../models/productos.factory';
import {TipoPersistencia} from '../models/productos.factory';
import {CarritoFactoryDAO} from '../models/carrito.factory';
import {ProductoInterface} from '../models/productos.interfaces';
/**
 * Con esta variable elegimos el tipo de persistencia
 */
// const tipo = TipoPersistencia.sqlite;
const tipo = TipoPersistencia.fileSystem;

class capaAPI { //incluye productos y carrito
  private productos: any;
  private carrito: any;

  constructor() {
    this.productos = ProductosFactoryDAO.get(tipo);
    this.carrito = CarritoFactoryDAO.get(tipo);
  }

  //PRODUCTOS
  async getProductosAll(): Promise<ProductoInterface>{//id: string | undefined = undefined){//: Promise<ProductI[]> {
    //if (id) return this.productos.getProductosById(id);

    return this.productos.getProductosAll();
  }

  async getProductosById(id:number) {
      return this.productos.getProductosById(id);
  }

  async insertProducto(data:any) {
      return this.productos.insertProducto(data);
  }

  async deleteProducto(data:any) {
    return this.productos.deleteProducto(data);
   }

   async updateProducto(id:number, data:any) {
    return this.productos.updateProducto(id, data);
   }

   //carrito

   async getCarritoAll() {
       return this.carrito.getCarritoAll();
   }
   
   async getCarritoById(id:number) {
    return this.carrito.getCarritoById(id);
   }

   async deleteCarritoById(id:number) {
    return this.carrito.deleteProducto(id);
   }

   async deleteCarritoAll() {
    return this.carrito.deleteCarritoAll();
   }

}

export const api = new capaAPI();