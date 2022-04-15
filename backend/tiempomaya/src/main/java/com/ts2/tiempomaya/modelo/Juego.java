package com.ts2.tiempomaya.modelo;


import lombok.*;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalDateTime;

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
    private LocalDateTime fechaHora;


}
