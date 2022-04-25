export class Comentario {
    constructor(
        public id:number,
        public nombreUsuario:string,
        public contenido:string,
        public fechaHora:string,
        public idDescripcion:number
    ){}
}