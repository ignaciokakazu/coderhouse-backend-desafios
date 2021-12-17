import moment from 'moment';
import {Request, Response} from 'express';
import {api} from '../apis/api';
import {CarritoArray, CarritoInterface, NewCarritoInterface} from '../models/carrito.interfaces';
import {infoLogger, peligroLogger} from '../services/logger';
import { info } from 'console';

class ClassCarrito {
    private sqlite:any;
    private lista:any;

    constructor() {

    }

    async getCarritoById(req:Request, res:Response) {//id:number) {
        try {
            const id: number= Number(req.params.id);
            const carrito = await api.getCarritoById(id);
            
            res.json(carrito);
            
        } catch(error: any) {
            peligroLogger.warn(error.message);
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

    async addCarritoPrueba(req:Request, res:Response) {
        const cart = await api.addCarritoPrueba();
        console.log('soy el carrito prueba')
        res.json(cart)
    }

    async deleteCarritoById(req:Request, res:Response){//id:number) {
        try {
            await api.deleteCarritoById(req.body.id);
            
            res.json({msg: `Eliminado ${req.body.id}`});

        } catch (err:any) {
            res.json({error: err.message});
        }
    }

    async setCarritoNuevo(req:Request, res:Response, id: string) {
        infoLogger.info(`seteo carrito nuevo para ${req.body.email}`)
        console.log(req.user);
        console.log(req.body.user);
        infoLogger.info(req.user);
        infoLogger.log(req.body);

        const obj: NewCarritoInterface = {
            timestamp: moment().format('YYYY mm DDDD'),
            user: id,
            producto: [],
        }
        const idCarrito:string = await api.setCarritoNuevo(obj);
        
        return idCarrito
    }

    async setCarrito(req:Request, res:Response) {
        // try {
        //     if (!req.body.id) {
        //         const obj: CarritoInterface = {
        //                 timestamp: moment().format('YYYY mm dd'),
        //                 user: req.body.user,
        //                 producto: [{
        //                     id: req.body.producto.id,
        //                     nombre: req.body.producto.nombre,
        //                     descripcion: req.body.producto.descripcion,
        //                     codigo: req.body.producto.codigo,
        //                     foto: req.body.producto.foto,
        //                     precio: req.body.producto.precio,
        //                     cantidad: req.body.producto.cantidad,
        //                     timestamp: moment().format('YYYY mm dd')
        //                 }]
        //             }

        //             const id = await api.setCarritoNuevo(obj);
        //             res.json({msg:`abrí el carrito ${id}`})
        //         } else {
        //             //recibe un solo producto, así que hace un push al carrito viejo

        //             // const obj: CarritoInterface = {
        //             //     _id: req.body.id,
        //             //     timestamp: new Date(),
        //             //     user: req.body.user,
        //             //     producto: [{
        //             //         id: req.body.producto.id,
        //             //         nombre: req.body.producto.nombre,
        //             //         descripcion: req.body.producto.descripcion,
        //             //         codigo: req.body.producto.codigo,
        //             //         foto: req.body.producto.foto,
        //             //         precio: req.body.producto.precio,
        //             //         cantidad: req.body.producto.cantidad,
        //             //         timestramp: new Date()
        //             //     }]
        //             }

        // } catch(e:any) {
        //     res.json(e.message)
        // }

    }

    async addCarritoById(req:Request, res:Response) {
        try {
            //Productos
            const id:number = Number(req.params.body);
            const lista = await api.getProductosById(id);
            
            console.log(lista);

            //if (!prod.length) { throw new Error('No hay productos disponibles. Comuniquese con el administrador')}

            //todo esto hay que adaptar para que funcione 

            //Productos del carrito
            // const carrito = await api.getCarritoAll();
            
            // const idCarrito:any = await this.generarId(this.carrito);
               
            // this.carrito.push({
            //     id: idCarrito,
            //     timestamp: moment().format('yy-MM-DD HH:mm:ss'),
            //     producto: prod
            // })
            // console.log(this.carrito)
            // await db.write("carrito", this.carrito)
            //    return this.carrito;  
               
        } catch (error:any) {
            return {error: error.message}
        }
    }

}

export const Carrito = new ClassCarrito();