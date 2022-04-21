export class Usuario {
    nombreUsuario:string;
    idTipoUsuario:number;
    contrasenia:string;
    fechaNacimiento:string;
    sexo:number;
    direccion:string;

    constructor(
        nombreUsuario:string,
        idTipoUsuario:number,
        contrasenia:string,
        fechaNacimiento:string,
        sexo:number,
        direccion:string
    ){
        this.nombreUsuario = nombreUsuario;
        this.idTipoUsuario = idTipoUsuario;
        this.contrasenia = contrasenia;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.direccion = direccion;
    }
}