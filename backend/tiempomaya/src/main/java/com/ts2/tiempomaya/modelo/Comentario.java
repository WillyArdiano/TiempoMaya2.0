package com.ts2.tiempomaya.modelo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ts2.tiempomaya.utilidad.Fecha;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Comentario")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_comentario")
    private int idComentario;
    @Column(name = "nombre_usuario")
    private String nombreUsuario;
    @Column(name = "contenido")
    private String contenido;
    @Column(name = "fecha_hora")
    @JsonProperty("fechaHora")
    @JsonFormat(pattern= Fecha.FORMATO_FECHA_1)
    private Timestamp fechaHora;
    @Column(name = "id_descripcion")
    private int idDescripcion;

}
