import fs from 'fs';

const urls = {
    carrito: "./carrito.txt",
    productos: "./productos.txt",
}

class Db {

    async read(tipo) {
        try {
            this.url = urls[tipo];
            if (!fs.existsSync(this.url)) {throw new Error (`El archivo ${this.url} no existe. Comuniquese con el administrador`)} 
            const lista = await fs.promises.readFile(this.url, 'utf-8');
            lista? this.lista = JSON.parse(lista) : this.lista = [];
            return this.lista;

        } catch(error) {
            return {error: error.message};
        }
    }

    async write(tipo, data) {
        try {
            this.url = urls[tipo];
            if (!fs.existsSync(this.url)) {throw new Error(`El archivo ${this.url} no existe. Comuniquese con el administrador`)} //si existe el archivo, sino tira error
            await fs.promises.writeFile(this.url, JSON.stringify(data), 'utf-8')
        } catch(error) {
            return error.message;
        }
    }
}

export const db = new Db();

