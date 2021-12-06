import fs from 'fs';
import path from 'path';
import moment from 'moment';
import ProductosDTO from '../productos.dto';

export class ProductosFSDAO {
    url:string;
    urls: any; 
    lista: any;

    constructor () {
        // this.urls = {
        //     carrito: "./carrito.txt",
        //     productos: "./productos.txt",
        // };
        const filePath = path.resolve(__dirname, './productos.txt');
        console.log(filePath);
        this.url = filePath;
        //Acá hay que mockear los datos y crear el archivo
    }

    async getProductosAll(): Promise<ProductosDTO>{
        
            //if (!fs.existsSync(this.url)) {throw new Error (`El archivo ${this.url} no existe. Comuniquese con el administrador`)} 
            const lista = await fs.promises.readFile(this.url, 'utf-8');
            let response: any;
            lista? response = JSON.parse(lista) : response = [];
            return response;
        
    }

    async getProductosById(id:number): Promise<ProductosDTO> {
        const lista = await fs.promises.readFile(this.url, 'utf-8');
        let response: any;
        lista? response = JSON.parse(lista) : response = [];
        
        const productoById = response.filter((prod:any) => prod.id == id);
        return new ProductosDTO(productoById);            

    }

    async write(data:any) {
        await fs.promises.writeFile(this.url, JSON.stringify(data), 'utf-8')
    }

    async insertProducto(data:any): Promise<ProductosDTO>{
        //lo pido sin ID. Lo averiguo acá. 
        const newId: number = await this.generarId();
        const productoObj = {
            _id: newId.toString(),
            timestamp: moment().format('yy-MM-DD HH:mm:ss'),
            nombre:data.nombre,
            descripcion:data.descripcion,
            codigo:data.codigo,
            foto:data.foto,
            precio:data.precio,
            stock:data.stock
        }
        
        const productos:any = await this.getProductosAll();
        productos.push(productoObj);

        this.write(productos);

        return new ProductosDTO(productoObj);
    }

    async generarId() {
        const productos:any = await this.getProductosAll();
        const largo:number = productos.length;
        let max:number = 0;
        for (let i=0;i<largo;i++) {
            if (parseInt(productos[i].id) > max) {
                max = parseInt(productos[i].id);
            }
        }
        return max + 1;
    }

    async deleteProducto(id:number) {
        const productos:any = await this.getProductosAll();
        const productosTemp = productos.filter((prod:any)=> prod.id != id);
        this.write(productosTemp);
    }

    async updateProducto(id:number, data:any){
        const productos:any = await this.getProductosAll();
        const productosTemp = {
            _id: id,
            nombre: data.nombre,
            descripcion: data.descripcion,
            codigo: data.codigo,
            foto: data.foto,
            precio: data.precio,
            stock: data.stock
        }
        const productosFilter = productos.filter((prod:any)=>prod.id == id);
        productosFilter.push(productosTemp);
        this.write(productosFilter);
    }

    // async read(tipo:string) {
    //     try {
    //         this.url = this.urls[tipo];
    //         if (!fs.existsSync(this.url)) {throw new Error (`El archivo ${this.url} no existe. Comuniquese con el administrador`)} 
    //         const lista = await fs.promises.readFile(this.url, 'utf-8');
    //         lista? this.lista = JSON.parse(lista) : this.lista = [];
    //         return this.lista;

    //     } catch(error:any) {
    //         return {error: error.message};
    //     }
    // }

    // async write(tipo:string, data:any) {
    //     try {
    //         this.url = this.urls[tipo];
    //         if (!fs.existsSync(this.url)) {throw new Error(`El archivo ${this.url} no existe. Comuniquese con el administrador`)} //si existe el archivo, sino tira error
    //         await fs.promises.writeFile(this.url, JSON.stringify(data), 'utf-8')
    //     } catch(error:any) {
    //         return error.message;
    //     }
    // }

    // async update(tipo:string, data:any) {

    // }

    // async delete(id:number) {
        
    // }
}



