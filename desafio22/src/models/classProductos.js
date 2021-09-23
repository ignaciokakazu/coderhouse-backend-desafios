//import {DBService} from '../persistencia/productos';
//import { Request, Response } from 'express';
import {DBService} from '../persistencia/mongoProductos';
import faker from 'faker';

class classProductos {
    listaProductos;

    async getListaProductosHB() {
        try {
            return await DBService.getAll();
        } catch (err) {
            return {error: err.message};
        }
    }

    async getListaProductos(req, res) {
        try {
            res.json(await DBService.getAll())
        } catch (err) {
            res.json({error: err.message});
        }
    }

    async getProducto(req, res) {
        const id = Number(req.params.id);
        try {
            res.json(await DBService.getProductById(id));
        } catch(err) {
            res.json({error: err.message});
        }
    }

    async addProducto(req, res) {
        const requestBody = req.body;
        const nombre = requestBody.nombre;
        const price = Number(requestBody.price);
        const thumbnail = requestBody.thumbnail;
        const stock = Number(requestBody.stock);
        const descripcion = requestBody.descripcion;
        const category_id = Number(requestBody.category_id);

        try {
            if (typeof nombre !== "string") throw new Error("Título debe ser string")
            if (isNaN(price)) throw new Error("Precio debe ser number")
            if (typeof thumbnail !== "string") throw new Error("Thumbnail debe ser string")

            const id = await DBService.getCount() + 1;

            const prodTemp = {
                id: id,
                nombre: nombre, 
                price:price, 
                thumbnail: thumbnail, 
                stock: stock, 
                descripcion: descripcion, 
                timestamp: new Date(), 
                category_id: category_id
            }; 

            await DBService.insert(prodTemp);

            res.json(prodTemp);
        } catch (err) {
            res.json({error: err.message});
        }
    }

    async deleteProducto(req, res) {
        const id = Number(req.params.id);

        try {
            await DBService.delete(id);
            res.json({msg: "eliminado " + id});
        } catch (err) {
            res.json({error:err.message});
        }  
    }

    async testProducto(req, res) {
        try {
            let cant;
            if (!req.query.cant) {
                cant = 10;
            } else {
                cant = req.query.cant;
            }

            const productosTest = [];
            for (let i=0; i<cant;i++) {
                const id = await DBService.getCount() + 1;
                const prodTemp = {
                    id: id,
                    nombre: faker.commerce.productName(), 
                    price: faker.commerce.price(), 
                    thumbnail: faker.image.imageUrl(), 
                    stock: faker.datatype.number(), 
                    descripcion: faker.commerce.productDescription(), 
                    timestamp: new Date(), 
                    category_id: faker.datatype.number()
                }; 

                await DBService.insert(prodTemp);
                productosTest.push(prodTemp);
                console.log(prodTemp);
            }

            res.json(productosTest);
        } catch(e) {
            res.json({error:e.message});
        }
    }

    async updateProducto(req, res) {
        //id:number, productoObj:any) {
        //id = parseInt(id)
        const requestBody = req.body;
        const id = Number(req.params.id);
        const nombre = requestBody.nombre;
        const price = Number(requestBody.price);
        const thumbnail = requestBody.thumbnail;
        const stock = Number(requestBody.stock);
        const descripcion = requestBody.descripcion;
        const category_id = Number(requestBody.category_id);

        try {
            const prodTemp = {nombre: nombre, price:price, thumbnail: thumbnail, stock: stock, descripcion: descripcion, category_id: category_id} 
            await DBService.update(id, prodTemp);
            res.json(prodTemp);

        } catch (err) {
            res.json({error: err.message});
        }
    }

}

export const Productos = new classProductos();