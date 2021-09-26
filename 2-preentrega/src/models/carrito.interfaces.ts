export type CarritoArray = Array<CarritoInterface>;

export interface CarritoInterface {
    id: number|string, 
    timestamp: string,
    producto: {
        id: number,
        nombre: string,
        descripcion: string,
        codigo: string,
        foto: string,
        precio: number,
        stock: number,
        timestamp: string
    }
}

export interface NewCarritoInterface {
    //id: number, 
    nombre: string,
    descripcion: string,
    codigo: string,
    foto: string,
    precio: number,
    stock: number,
    timestamp: string
}