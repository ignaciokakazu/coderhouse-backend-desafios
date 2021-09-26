export type ProductoArray = Array<ProductoDelCarritoInterface>;

export interface ProductoInterface {
    id: number, 
    //timestamp: string,
    nombre: string,
    descripcion: string,
    codigo: string,
    foto: string,
    precio: number,
    stock: number,
    timestamp: number
}

export interface NewProductoInterface {
    //id: number, 
    nombre: string,
    descripcion: string,
    codigo: string,
    foto: string,
    precio: number,
    stock: number,
    timestamp: string
}

export interface ProductoDelCarritoInterface { //esto tiene que ser borrado. Todo tiene que ser lo mismo
    id: number, 
    //timestamp: string,
    nombre: string,
    descripcion: string,
    codigo: string,
    foto: string,
    precio: number,
    stock: number,
    timestamp: string
}