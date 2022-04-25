package com.ts2.tiempomaya.repositorio;

import com.ts2.tiempomaya.modelo.Juego;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepositorioJuego extends JpaRepository<Juego,Integer> {

    List<Juego> findAllByNombreUsuario(String nombreUsuario);
    List<Juego> findAllByDificultad(int dificultad);

}
