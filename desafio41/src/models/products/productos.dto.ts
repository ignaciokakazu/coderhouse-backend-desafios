import { NumberSchema } from 'joi';
import { ProductoInterface } from './productos.interfaces';

export default class ProductosDTO {
  id: string;
  nombre: string;
  descripcion: string;
  codigo: string;
  foto: string;
  precio: number;
  stock:number;
  timestamp: string;

  constructor(data: ProductoInterface) {
    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    this.codigo = data.codigo;
    this.foto = data.foto;
    this.timestamp = data.timestamp;
    this.precio = data.precio;
    this.stock = data.stock;
    this.id = data._id || '';
  }
}


