"use strict";
// import fs from 'fs';
// import path from 'path';
// import moment from 'moment';
// export class CarritoFSDAO {
//     url:string;
//     urls: any; 
//     lista: any;
//     constructor () {
//         // this.urls = {
//         //     carrito: "./carrito.txt",
//         //     productos: "./productos.txt",
//         // };
//         const filePath = path.resolve(__dirname, './carrito.txt');
//         console.log(filePath);
//         this.url = filePath;
//         //Acá hay que mockear los datos y crear el archivo
//     }
//     async getCarritoAll() {
//         try {
//             if (!fs.existsSync(this.url)) {throw new Error (`El archivo ${this.url} no existe. Comuniquese con el administrador`)} 
//             const lista = await fs.promises.readFile(this.url, 'utf-8');
//             let response: any;
//             lista? response = JSON.parse(lista) : response = [];
//             return response;
//         } catch(error:any) {
//             return {error: error.message};
//         }
//     }
//     async getCarritoById(id:number) {
//         try {
//             const carritoAll = await this.getCarritoAll();
//             const carritoById = carritoAll.filter((carrito:any) => carrito.id == carrito);
//             return carritoById;            
//         } catch(error:any) {
//             return {error: error.message};
//         }
//     }
//     async write(data:any) {
//         try {
//             await fs.promises.writeFile(this.url, JSON.stringify(data), 'utf-8')
//         } catch(error:any) {
//             return error.message;
//         }
//     }
//     async insertCarrito(data:any){
//         //lo pido sin ID. Lo averiguo acá. 
//         const newId: number = await this.generarId();
//         const productoObj = {
//             id: newId,
//             timestamp: moment().format('yy-MM-DD HH:mm:ss'),
//             nombre:data.nombre,
//             descripcion:data.descripcion,
//             codigo:data.codigo,
//             foto:data.foto,
//             precio:data.precio,
//             stock:data.stock
//         }
//         const carrito:any = await this.getCarritoAll();
//         carrito.push(productoObj);
//         this.write(productos);
//         return productoObj;
//     }
//     async generarId(carrito:any) {
//         /* si no fuera async, se empiezan a pisar los ids */
//         const largo:number = carrito.length;
//         let max:number = 0;
//         for (let i=0;i<largo;i++) {
//             if (parseInt(carrito[i].id) > max) {
//                 max = parseInt(carrito[i].id);
//             }
//         }
//         return max + 1;
//     }
//     async deleteProducto(id:number) {
//         const productos:any = await this.getProductosAll();
//         const productosTemp = productos.filter((prod:any)=> prod.id != id);
//         this.write(productosTemp);
//     }
//     async updateProducto(id:number, data:any) {
//         const productos:any = await this.getProductosAll();
//         const productosTemp = {
//             id: id,
//             nombre: data.nombre,
//             descripcion: data.descripcion,
//             codigo: data.codigo,
//             foto: data.foto,
//             precio: data.precio,
//             stock: data.stock
//         }
//         const productosFilter = productos.filter((prod:any)=>prod.id == id);
//         productosFilter.push(productosTemp);
//         this.write(productosFilter);
//     }
// }
