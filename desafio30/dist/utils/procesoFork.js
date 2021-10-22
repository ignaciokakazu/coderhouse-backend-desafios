"use strict";
var cantidad = process.argv.slice(2);
console.log(cantidad);
var calculo = function () {
    var numeros = [];
    console.log(cantidad[0]);
    var _loop_1 = function (i) {
        var randomInt = getRandomInt();
        var obj = numeros.find(function (objeto) { return objeto.nro === randomInt; });
        if (obj) {
            numeros.push({
                nro: randomInt,
                cant: obj.cant++
            });
        }
        else {
            numeros.push({
                nro: randomInt,
                cant: 1
            });
        }
    };
    for (var i = 0; i < cantidad; i++) {
        _loop_1(i);
    }
    return numeros;
};
function getRandomInt(min, max) {
    if (min === void 0) { min = 1; }
    if (max === void 0) { max = 1000; }
    return Math.floor(Math.random() * (max - min)) + min;
}
process.on('message', function (msg) {
    if (msg == 'start') {
        console.log('Arranca Start');
        var resultado = calculo();
        if (process && process.send) {
            process.send(resultado);
        }
    }
});
