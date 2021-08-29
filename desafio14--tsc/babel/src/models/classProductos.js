import fs from "fs"

export default class classProductos {
    constructor() {
        this.url = "./productos.txt";
    }

    async getListaProductos() {
        try {
            if (fs.existsSync(this.url)) {
                const data = await fs.promises.readFile(this.url, "utf-8")
                this.listaProductos = JSON.parse(data)
            } else {
                this.listaProductos = []
                console.log("no hay elementos")
            }
        } catch (err) {
            console.log(err)
        }
    }

    getProducto(id) {
        const filtrado = this.listaProductos.filter(element => element.id == id)
        let msg;
        if (filtrado.length != 0 ) {
            msg = filtrado;
        } else if (filtrado.length == 0) {
            msg = {error : 'no hay productos cargados'}
        } else {
            msg = {error : 'producto no encontrado'}
        }
        return msg
    }

    addProducto(productoObj) {
        const id = this.listaProductos.length
        const title = productoObj.title
        const price = productoObj.price
        const thumbnail = productoObj.thumbnail

        try {
            if (typeof title !== "string") throw new Error("Título debe ser string")
            if (isNaN(price)) throw new Error("Precio debe ser number")
            if (typeof thumbnail !== "string") throw new Error("Thumbnail debe ser string")

            const prodTemp = {id:id, title: title, price:price, thumbnail: thumbnail} 

            this.listaProductos.push(prodTemp)

            fs.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8")
            return prodTemp
        } catch (err) {
            return err.message
        }
    }

    deleteProducto(id) {
        const productoBorrado = this.listaProductos.filter((element)=>element.id == id)

        try {
        if (productoBorrado.length==0) throw new Error("No se encuentra el id del producto")
            //guardo la lista SIN el producto borrado
            const filtrado = this.listaProductos.filter((element)=>element.id != id)
            this.listaProductos = filtrado

            fs.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8")
            return productoBorrado
        } catch (err) {
            return err.message
        }  
    }

    updateProducto(id, productoObj) {
        id = parseInt(id)
        const title = productoObj.title
        const price = parseInt(productoObj.price)
        const thumbnail = productoObj.thumbnail

        try {
            if (isNaN(id)) throw new Error("Id debe ser numérico")
            if (typeof title !== "string") throw new Error("Título debe ser string")
            if (isNaN(price)) throw new Error("Precio debe ser number")
            if (typeof thumbnail !== "string") throw new Error("Thumbnail debe ser string")

            const filtrado = this.listaProductos.filter((element)=> element.id != id)

            if (filtrado.length == this.listaProductos.length) throw new Error("No se encuentra el ID")

            const prodTemp = {id:id, title: title, price:price, thumbnail: thumbnail} 
            filtrado.push(prodTemp)
            this.listaProductos = filtrado
            fs.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8")
            return prodTemp
        } catch (err) {
            return err.message
        }
    }

    productosSort() {

    }
}
