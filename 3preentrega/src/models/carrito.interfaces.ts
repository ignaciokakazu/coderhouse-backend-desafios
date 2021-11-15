export type CarritoArray = Array<CarritoInterface>;

export interface CarritoInterface {
    _id: string, 
    timestamp: string,
    user: string,
    producto: [{
        id: number,
        nombre: string,
        descripcion: string,
        codigo: string,
        foto: string,
        precio: number,
        cantidad: number,
        timestamp: string
    }]
}

export interface NewCarritoInterface {
    timestamp: string,
    user: string,
    producto: []
}
