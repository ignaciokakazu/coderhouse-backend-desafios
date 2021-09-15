//import { productosDB } from '../models/mongodb';




// import { mySQLDB } from '../services/db';

// class DBProductos {
//   async getAll() {
//     const lista:any = await mySQLDB('productos');
//     return lista;
//   }

//   async getProductById(id:number) {
//     const lista: any = await mySQLDB('productos').where({id: id});
//     return lista;
//   }

//   async insert(data: any) {
//     await mySQLDB('productos').insert(data);
//   }

//   async delete(id:number) {
//       await mySQLDB('productos').where({id: id}).del();
//   }

//   async update(id:number, producto:any) {
//     await mySQLDB('productos').where({id: id}).update(producto);
//   }
// }

// export const DBService = new DBProductos();