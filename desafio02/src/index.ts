const operacion = (numeroUno:number, numeroDos:number, tipo:string) => {
    return new Promise(resolve => {
        import("./classOpera").then((modulo) => {
            let opera = new modulo.classOpera(numeroUno,numeroDos,"suma");
            resolve(opera.resultado());
        })
    })
}

//así funciona:
// const operaciones = async () => {
//     const resultado = await operacion(1,2,"suma");
//     return resultado;
// }
//  console.log(operaciones();
//

const operaciones = async () => {
    const resultado = await operacion(1,2,"suma");
    return resultado;
}

operaciones().then((resultado)=>{
    console.log(resultado);
});