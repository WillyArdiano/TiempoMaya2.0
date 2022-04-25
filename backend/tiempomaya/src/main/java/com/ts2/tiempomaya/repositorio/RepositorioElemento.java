package com.ts2.tiempomaya.repositorio;

import com.ts2.tiempomaya.modelo.Elemento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepositorioElemento extends JpaRepository<Elemento,Integer> {

    List<Elemento> findAllByTipoElemento(String tipoElemento);

}
