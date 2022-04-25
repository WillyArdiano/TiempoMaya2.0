package com.ts2.tiempomaya.modelo;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ts2.tiempomaya.utilidad.Fecha;
import lombok.*;

import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;

@Entity
@Table(name = "Juego")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Juego {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_juego")
    private int idJuego;
    @Column(name = "nombre_usuario")
    private String nombreUsuario;
    @Column(name = "punteo")
    private int punteo;
    @Column(name = "tiempo")
    private Time tiempo;
    @Column(name = "fallos")
    private int fallos;
    @Column(name = "dificultad")
    private int dificultad;
    @Column(name = "fecha_hora")
    @JsonProperty("fechaHora")
    @JsonFormat(pattern= Fecha.FORMATO_FECHA_2)
    private Timestamp fechaHora;


}
