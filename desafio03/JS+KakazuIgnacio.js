const funcionUno = async (frase, callbackFunction, delay = 1) => {
 let arrayTemp = frase.split(" ");
 let delayMiliSeg = delay * 1000;
 let cantidad = arrayTemp.length;

 for (let palabra of arrayTemp) {
     await console.log(palabra);
     await espera(delayMiliSeg);
 }

  callbackFunction(cantidad);

  return cantidad;
}

const cuentaPalabras = (cantidad) => {
    console.log(`Son ${cantidad} palabras`);
}

const espera = ms => new Promise(resolve => setTimeout(resolve, ms));

const prueba = async ()=> {
    let cantidad = 0;

    cantidad = await funcionUno("Hola cómo andas", cuentaPalabras, 1);
    cantidad += await funcionUno("Soy la segunda frase", cuentaPalabras,3);
    cantidad += await funcionUno("Esta es otra oración", cuentaPalabras, 5);
    cantidad += await funcionUno("No tiene tiempo, va de a un segundo", cuentaPalabras);

    console.log(`Proceso completo. Cantidad de palabras = ${cantidad}`);
}

prueba();