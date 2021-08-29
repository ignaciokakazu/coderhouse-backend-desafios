/*
>> Consigna: Implementar programa que contenga una clase llamada Archivo que reciba 
el nombre del archivo con el que va a trabajar e implemente los métodos leer, guardar, borrar.

Utilizar guardar para incorporar productos al archivo "productos.txt"

* La función guardar incorporará al producto un id, el cual se obtendrá de la longitud total del array actual más 1.
* Con el método leer se mostrará en consola el listado total (si el archivo existe) como un array de productos. 
Si el archivo no existe, se retornará un array vacío.
* El método borrar elimina el archivo completo.
* Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async await y manejo de errores.

*/

const fs = require("fs");

function classArchivo(archivo) {
    this.archivo = archivo;
    this.jsonObj;

    this.leer = async function () {
        try {
            if (fs.existsSync(this.archivo)) {
                const data = await fs.promises.readFile(this.archivo, "utf-8");
                this.jsonObj = JSON.parse(data);
            } else {
                this.jsonObj = [];
            }
            console.log(this.jsonObj);
        } catch (err) {
            console.log(err);
        }
    }

    this.guardar = async function (title, price, thumbnail) {
        try {
            await this.leer();
            let id = this.jsonObj.length;
            id++;
            const objTemp =  {
                "title": title,
                "price": price,
                "thumbnail": thumbnail,
                "id": id
            }

            this.jsonObj.push(objTemp);
            
            //guardar
            await fs.promises.writeFile(this.archivo, JSON.stringify(this.jsonObj), "utf-8");
            
           console.log(this.jsonObj)
        } catch (err) {
           console.log(err);
        }
    }

    this.borrar = async function () {
        try {
            await fs.promises.unlink(this.archivo)
            console.log(this.archivo + " eliminado")
        } catch (err) {
            console.log(err)
        }
    }

}

const data = new classArchivo("./productos.txt");

data.leer();
data.guardar("coso", 352, "thumbnailsrc");
//data.borrar();