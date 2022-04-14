package com.ts2.tiempomaya.modelo;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "Usuario")
@Getter @Setter @ToString @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {

    @Id
    @Column(name = "nombre_usuario")
    private String nombreUsuario;
    @Column(name = "id_tipo_usuario")
    private int idTipoUsuario;
    @Column(name = "contrasenia")
    private String contrasenia;
    @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;
    @Column(name = "sexo")
    private int sexo;
    @Column(name = "direccion")
    private String direccion;

}
