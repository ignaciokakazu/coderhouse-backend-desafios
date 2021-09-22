// import { NewProductoInterface, ProductoInterface } from '../models/interfaces';
// import { ProductQuery } from '../models/interfaces';
import { ProductosFactoryDAO } from '../models/productos.factory';
import { TipoPersistencia } from '../models/productos.factory';


/**
 * Con esta variable elegimos el tipo de persistencia
 */
// const tipo = TipoPersistencia.sqlite;
const tipo = TipoPersistencia.firebase;

class prodAPI {
  private productos;

  constructor() {
    this.productos = ProductosFactoryDAO.get(tipo);
  }

  async getProductosAll(){//id: string | undefined = undefined){//: Promise<ProductI[]> {
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
//   async addProduct(productData: newProductI): Promise<ProductI> {
//     const newProduct = await this.productos.add(productData);
//     return newProduct;
//   }

//   async updateProduct(id: string, productData: newProductI) {
//     const updatedProduct = await this.productos.update(id, productData);
//     return updatedProduct;
//   }

//   async deleteProduct(id: string) {
//     await this.productos.delete(id);
//   }

//   async query(options: ProductQuery) {
//     return await this.productos.query(options);
//   }
}

export const productosAPI = new prodAPI();