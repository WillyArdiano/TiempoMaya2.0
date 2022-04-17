package com.ts2.tiempomaya.servicio;

import com.ts2.tiempomaya.modelo.Comentario;

import java.util.List;

public interface ServicioComentario {
    List<Comentario> obtenerComentariosConcepto(int idConcepto);
    void guardar(Comentario comentario);
}
