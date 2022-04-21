export class Usuario {
    constructor(
        public nombreUsuario:string,
        public idTipoUsuario:number,
        public contrasenia:string,
        public fechaNacimiento:string,
        public sexo:number,
        public direccion:string
    ){}
}