export class Concepto{
    idConcepto:number;
    palabra:string;
    significado:string;

    constructor(
        idConcepto:number,
        palabra:string,
        significado:string,
    ){
        this.idConcepto = idConcepto;
        this.palabra = palabra;
        this.significado = significado;

    }
}