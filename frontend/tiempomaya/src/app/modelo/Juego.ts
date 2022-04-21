import { Time } from "@angular/common";

export class Juego {
    
    constructor(
        public idJuego:number,
        public nombreUsuario:string,
        public punteo:number,
        public tiempo:string,
        public fallos:number,
        public dificultad:number,
        public fechaHora:string      
    ){

    }

}