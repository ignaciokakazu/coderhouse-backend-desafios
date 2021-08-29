export class classOpera {
    private numeroUno: number;
    private numeroDos: number;
    private tipo: string;

    constructor(numeroUno: number, numeroDos: number, tipo:string) {
        this.tipo = tipo;
        this.numeroUno = numeroUno;
        this.numeroDos = numeroDos;
    }

    resultado() {
        if (this.tipo === "suma") {
            return this.numeroUno + this.numeroDos;
        } else if(this.tipo === "resta") {
            return this.numeroUno - this.numeroDos;
        }
    }
}
