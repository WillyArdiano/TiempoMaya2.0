package com.ts2.tiempomaya.servicio;

import com.ts2.tiempomaya.modelo.Juego;

import java.util.List;

public interface ServicioJuego {
    List<Juego> obtenerJuegos();
    void guardar(Juego juego);
}
