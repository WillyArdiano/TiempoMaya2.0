package com.ts2.tiempomaya.modelo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ts2.tiempomaya.utilidad.Fecha;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Reaccion")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Reaccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reaccion")
    private int idReaccion;
    @Column(name = "nombre_usuario")
    private String nombreUsuario;
    @Column(name = "id_descripcion")
    private int idDescripcion;
    @Column(name = "fecha_hora")
    @JsonProperty("fechaHora")
    @JsonFormat(pattern= Fecha.FORMATO_FECHA)
    private Timestamp fechaHora;
    @Column(name = "tipo_reaccion")
    private int tipoReaccion;

}
