package com.ts2.tiempomaya.repositorio;

import com.ts2.tiempomaya.modelo.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepositorioComentario extends JpaRepository<Comentario,Integer> {

    List<Comentario> findAllByIdConcepto(int idConcepto);

}
