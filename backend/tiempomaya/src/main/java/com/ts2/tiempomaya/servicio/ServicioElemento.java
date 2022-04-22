package com.ts2.tiempomaya.servicio;

import com.ts2.tiempomaya.modelo.Elemento;

import java.util.List;

public interface ServicioElemento {
    List<Elemento> obtenerElementos(String tipoElemento);
}
