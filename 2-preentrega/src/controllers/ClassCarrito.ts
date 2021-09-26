import moment from 'moment';
import {Request, Response} from 'express';
import {api} from '../apis/api';

class ClassCarrito {
    private lista: any;
    
    constructor() {
    
    }

    async getCarritoById(req:Request, res:Response) {//id:number) {
        try {
            const id: number= Number(req.params.id);
            const carrito = await api.getCarritoById(id);
            
            res.json(carrito);
            
        } catch(error: any) {
            res.json ({error: error.message})
        }
    }

    async getCarritoAll(req:Request, res:Response) {
        try {
            const carritoAll = await api.getCarritoAll();
            res.json(carritoAll);
        } catch (error:any) {
            res.json({error: error.message});
        }
    }

    async deleteCarritoById(req:Request, res:Response){//id:number) {
        try {
            const id:number = Number(req.params.body);
            const carrito = await api.deleteCarritoById(id);
            
            res.json({msg: `Eliminado ${id}`});

        } catch (err:any) {
            res.json({error: err.message});
        }
    }

    async deleteCarritoAll(req:Request, res:Response) {
        try {
            await api.deleteCarritoAll();
            res.json({msg: "Carrito eliminado"});
        } catch(error:any) {
            res.json({error: error.message});
        }
    }

    async addCarritoById(req:Request, res:Response) {
        try {
            //Productos
            const id:number = Number(req.params.body);
            const lista = await api.getProductosById(id));
            
            if (!prod.length) { throw new Error('No hay productos disponibles. Comuniquese con el administrador')}

            //todo esto hay que adaptar para que funcione 

            //Productos del carrito
            const carrito = await api.getCarritoAll();
            
            const idCarrito:any = await this.generarId(this.carrito);
               
            this.carrito.push({
                id: idCarrito,
                timestamp: moment().format('yy-MM-DD HH:mm:ss'),
                producto: prod
            })
            console.log(this.carrito)
            await db.write("carrito", this.carrito)
               return this.carrito;  
               
        } catch (error:any) {
            return {error: error.message}
        }
    }

}

export const Carrito = new ClassCarrito();