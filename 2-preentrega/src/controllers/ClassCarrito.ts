// import moment from 'moment';

// class ClassCarrito {
//     private lista: any;
    
//     constructor() {
    
//     }

//     async getCarritoById(id:number) {
//         try {
//             this.lista = await db.read("carrito");
//             const prod = this.lista.filter((product:any)=> product.id == id);
            
//             if (!prod.length) {throw new Error('No existe el producto por ID')}
            
//             return prod;
            
//         } catch(error: any) {
//             return {error: error.message}
//         }
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

//     async getCarritoAll() {
//         //si existe el file
//         //try y catch
//         //si existe el id
//         try {
//             this.carrito = await db.read("carrito");
//             return this.carrito;
//         } catch (error:any) {
//             return {error: error.message};
//         }
//     }

//     async deleteCarritoById(id:number) {
//         try {
//             this.carrito = await db.read("carrito");

//             if (!this.carrito.length) {throw new Error('Carrito vacío. No se puede eliminar')}
            
//             const filtrada:any = this.carrito.filter((prod:any)=>prod.id != id);

//             if (filtrada.length == this.carrito.length) {throw new Error('No se encuentra el ID')}

//             this.carrito = filtrada;

//             await db.write("carrito", this.carrito);
            
//             return {msg: "Eliminado"};

//         } catch (error:any) {
//             return {error: error.message}
//         }
//     }

//     // /* para después... */
//     // async deleteCarritoByIdProducto(id_producto) {
//     //     //si existe el file
//     //     //try y catch
//     //     //si existe el id
        
//     //     this.carrito = await db.read("carrito")
        
//     //     // si es vacío, throw new error
        
//     //     const filtrada = this.removeItemOnce(carrito, id_producto);
//     //     this.carrito = filtrada;
//     //     await db.write("carrito", this.carrito)
//     //     return id_producto;
//     // }

//     // removeItemOnce(arr, value) {
//     //     let bandera = false;
//     //     let posicion = 0;

//     //     while (bandera == false || posicion<arr.length){  
//     //         if (arr[posicion].producto.id == value) {
//     //             const arrayNuevo = arr.splice(0, posicion-1); //corto
//     //             arrayNuevo.push(arr.splice(posicion,arr.length)); //pego
//     //             bandera = true;
//     //         }
//     //         posicion ++;
//     //     }
//     //     return arrayNuevo;
//     //   }

//     async deleteCarritoAll() {
//         try {
//             this.carrito = [];
//             db.write("carrito", this.carrito);
//             return {msg: "Carrito eliminado"};
//         } catch(error:any) {
//             return {error: error.message}
//         }
//     }

//     async addCarritoById(id:number) {
//         try {
//             //Productos
//             this.lista = await db.read("productos");
//             const prod = this.lista.filter((product:any) => product.id == id); 
            
//             if (!prod.length) { throw new Error('No hay productos disponibles. Comuniquese con el administrador')}

//             //Productos del carrito
//             this.carrito = await db.read("carrito") ;
            
//             const idCarrito:any = await this.generarId(this.carrito);
               
//             this.carrito.push({
//                 id: idCarrito,
//                 timestamp: moment().format('yy-MM-DD HH:mm:ss'),
//                 producto: prod
//             })
//             console.log(this.carrito)
//             await db.write("carrito", this.carrito)
//                return this.carrito;  
               
//         } catch (error:any) {
//             return {error: error.message}
//         }
//     }

// }

// export const Carrito = new ClassCarrito();