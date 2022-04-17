package com.ts2.tiempomaya.repositorio;

import com.ts2.tiempomaya.modelo.Reaccion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepositorioReaccion extends JpaRepository<Reaccion,Integer> {

    List<Reaccion> findAllByIdDescripcion(int idDescripcion);

}
