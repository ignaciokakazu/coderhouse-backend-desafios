
// const cantidad = process.argv.slice(2);
// console.log(cantidad);
export const calculo = (cantidad) => {
    
    const numeros = [];
    // console.log(cantidad[0]);

    for (let i=0;i<cantidad;i++) {
        const randomInt = getRandomInt();

        const obj = numeros.find(objeto=>objeto.nro===randomInt);

        if (obj) {
            numeros.push({
                nro: randomInt,
                cant: obj.cant++
            });
        } else {
            numeros.push({
                nro: randomInt,
                cant: 1
            });
        }
    }

    return numeros;

}

function getRandomInt(min=1, max=1000) {
    return Math.floor(Math.random() * (max - min)) + min;
}

process.on('message', (msg)=> {
    if (msg =='start') {
        console.log('Arranca Start');
        const resultado = calculo();

        if (process && process.send) {
            process.send(resultado);
        }
    }
})