package com.ts2.tiempomaya.servicio;

import com.ts2.tiempomaya.modelo.Reaccion;

import java.util.List;

public interface ServicioReaccion {
    List<Reaccion> obtenerReaccionesDescripcion(int idDescripcion);
    void guardar(Reaccion reaccion);
}
