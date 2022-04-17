package com.ts2.tiempomaya.servicio;

import com.ts2.tiempomaya.modelo.Descripcion;

import java.util.List;

public interface ServicioDescripcion {

    List<Descripcion> obtenerDescripcionesConcepto(int idConcepto);
    void guardar(Descripcion descripcion);

}
