//npm init -> instala el package.json
//npm install moment
//npm instal --save-dev nodemon (save-dev es solo para desarrollo) //esto es de dev-dependiencies en el package.json

const fs = require("fs");

/*fs.writeFileSync("./archivo.txt", "hola botón", "utf-8") //si la ruta es válida, pero no hay archivo, crea el archivo

const data = fs.readFileSync("./archivo.txt");

console.log(data);*/

const hoy = new Date()

try {
    fs.writeFileSync("./fyh.txt", hoy.toString(), "utf-8");
    const data = fs.readFileSync("./fyh.txt")
    console.log(data)

} catch(err) {
    console.log(err);
}

/*const data = fs.readFileSync("./fyh.txt")

console.log(data)*/
