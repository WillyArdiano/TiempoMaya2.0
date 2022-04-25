package com.ts2.tiempomaya.modelo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ts2.tiempomaya.utilidad.Fecha;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Descripcion")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Descripcion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_descripcion")
    private int idDescripcion;
    @Column(name = "nombre_usuario_autor")
    private String nombreUsuarioAutor;
    @Column(name = "id_concepto")
    private String idConcepto;
    @Column(name = "fecha_hora")
    @JsonProperty("fechaHora")
    @JsonFormat(pattern= Fecha.FORMATO_FECHA_2)
    private Timestamp fechaHora;
    @Column(name = "descripcion")
    private String descripcion;

}
