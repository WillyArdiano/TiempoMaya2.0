package com.ts2.tiempomaya.servicio.db;

import com.ts2.tiempomaya.modelo.Comentario;
import com.ts2.tiempomaya.repositorio.RepositorioComentario;
import com.ts2.tiempomaya.servicio.ServicioComentario;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioJPAComentario implements ServicioComentario {

    private RepositorioComentario repositorioComentario;

    public ServicioJPAComentario(RepositorioComentario repositorioComentario) {
        this.repositorioComentario = repositorioComentario;
    }

    @Override
    public List<Comentario> obtenerComentariosConcepto(int idConcepto) {
        return this.repositorioComentario.findAllByIdConcepto(idConcepto);
    }

    @Override
    public void guardar(Comentario comentario) {
        this.repositorioComentario.save(comentario);
    }
}
