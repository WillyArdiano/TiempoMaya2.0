package com.ts2.tiempomaya.servicio;

import com.ts2.tiempomaya.modelo.Concepto;

import java.util.List;

public interface ServicioConcepto {
    List<Concepto> obtenerConceptos();
    void guardar(Concepto concepto);
    Concepto obtenerConcepto(String palabra);
}
