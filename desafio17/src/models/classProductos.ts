import {DBService} from '../persistencia/productos';
import { Request, Response } from 'express';

class classProductos {
    listaProductos:any;

    async getListaProductosHB() {
        try {
            return await DBService.getAll();
        } catch (err:any) {
            return {error: err.message};
        }
    }

    async getListaProductos(req: Request, res: Response) {
        try {
            res.json(await DBService.getAll())
        } catch (err:any) {
            res.json({error: err.message});
        }
    }

    async getProducto(req: Request, res: Response) {
        const id:number = Number(req.params.id);
        try {
            res.json(await DBService.getProductById(id));
        } catch(err: any) {
            res.json({error: err.message});
        }
    }

    async addProducto(req: Request, res: Response) {
        const requestBody = req.body;
        const nombre:string = requestBody.nombre;
        const price:number = Number(requestBody.price);
        const thumbnail:string = requestBody.thumbnail;
        const stock:number = Number(requestBody.stock);
        const descripcion:string = requestBody.descripcion;
        const category_id:number = Number(requestBody.category_id);

        try {
            if (typeof nombre !== "string") throw new Error("Título debe ser string")
            if (isNaN(price)) throw new Error("Precio debe ser number")
            if (typeof thumbnail !== "string") throw new Error("Thumbnail debe ser string")

            const prodTemp = {
                nombre: nombre, 
                price:price, 
                thumbnail: thumbnail, 
                stock: stock, 
                descripcion: descripcion, 
                //timestamp: new Date(), 
                category_id: category_id
            }; 

            await DBService.insert(prodTemp);

            res.json(prodTemp);
        } catch (err:any) {
            res.json({error: err.message});
        }
    }

    async deleteProducto(req: Request, res: Response) {
        const id = Number(req.params.id);

        try {
            await DBService.delete(id);
            res.json({msg: "eliminado " + id});
        } catch (err:any) {
            res.json({error:err.message});
        }  
    }

    async updateProducto(req: Request, res: Response) {
        //id:number, productoObj:any) {
        //id = parseInt(id)
        const requestBody = req.body;
        const id = Number(req.params.id);
        const nombre:string = requestBody.nombre;
        const price:number = Number(requestBody.price);
        const thumbnail:string = requestBody.thumbnail;
        const stock:number = Number(requestBody.stock);
        const descripcion:string = requestBody.descripcion;
        const category_id:number = Number(requestBody.category_id);

        try {
            const prodTemp:any = {nombre: nombre, price:price, thumbnail: thumbnail, stock: stock, descripcion: descripcion, category_id: category_id} 
            await DBService.update(id, prodTemp);
            res.json(prodTemp);

        } catch (err:any) {
            res.json({error: err.message});
        }
    }

}

export const Productos = new classProductos();