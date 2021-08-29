import fs from "fs"

export default class classProductos {
    url:string;
    listaProductos:any;

    constructor() {
        this.url = "./productos.txt";
    }

    async getListaProductos() {
        try {
            if (fs.existsSync(this.url)) {
                const data:string = await fs.promises.readFile(this.url, "utf-8")
                this.listaProductos = JSON.parse(data)
            } else {
                this.listaProductos = []
                console.log("no hay elementos")
            }
        } catch (err:any) {
            console.log(err)
        }
    }

    getProducto(id:number) {
        const filtrado = this.listaProductos.filter((element: any) => element.id == id)
        let msg:any;
        if (filtrado.length != 0 ) {
            msg = filtrado;
        } else if (filtrado.length == 0) {
            msg = {error : 'no hay productos cargados'}
        } else {
            msg = {error : 'producto no encontrado'}
        }
        return msg
    }

    addProducto(productoObj:any) {
        const id:number = this.listaProductos.length
        const title:string = productoObj.title
        const price:number = productoObj.price
        const thumbnail:string = productoObj.thumbnail

        try {
            if (typeof title !== "string") throw new Error("Título debe ser string")
            if (isNaN(price)) throw new Error("Precio debe ser number")
            if (typeof thumbnail !== "string") throw new Error("Thumbnail debe ser string")

            const prodTemp = {id:id, title: title, price:price, thumbnail: thumbnail} 

            this.listaProductos.push(prodTemp)

            fs.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8")
            return prodTemp
        } catch (err:any) {
            return err.message
        }
    }

    deleteProducto(id:number) {
        const productoBorrado:any = this.listaProductos.filter((element:any)=>element.id == id)

        try {
        if (productoBorrado.length==0) throw new Error("No se encuentra el id del producto")
            //guardo la lista SIN el producto borrado
            const filtrado = this.listaProductos.filter((element:any)=>element.id != id)
            this.listaProductos = filtrado

            fs.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8")
            return productoBorrado
        } catch (err:any) {
            return err.message
        }  
    }

    updateProducto(id:number, productoObj:any) {
        //id = parseInt(id)
        const title:string = productoObj.title
        const price:number = parseInt(productoObj.price)
        const thumbnail:string = productoObj.thumbnail

        try {
            if (isNaN(id)) throw new Error("Id debe ser numérico")
            if (typeof title !== "string") throw new Error("Título debe ser string")
            if (isNaN(price)) throw new Error("Precio debe ser number")
            if (typeof thumbnail !== "string") throw new Error("Thumbnail debe ser string")

            const filtrado = this.listaProductos.filter((element:any)=> element.id != id)

            if (filtrado.length == this.listaProductos.length) throw new Error("No se encuentra el ID")

            const prodTemp:any = {id:id, title: title, price:price, thumbnail: thumbnail} 
            filtrado.push(prodTemp)
            this.listaProductos = filtrado
            fs.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8")
            return prodTemp
        } catch (err:any) {
            return err.message
        }
    }

}
