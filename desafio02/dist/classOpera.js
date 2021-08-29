"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classOpera = void 0;
class classOpera {
    constructor(numeroUno, numeroDos, tipo) {
        this.tipo = tipo;
        this.numeroUno = numeroUno;
        this.numeroDos = numeroDos;
    }
    resultado() {
        if (this.tipo === "suma") {
            return this.numeroUno + this.numeroDos;
        }
        else if (this.tipo === "resta") {
            return this.numeroUno - this.numeroDos;
        }
    }
}
exports.classOpera = classOpera;
