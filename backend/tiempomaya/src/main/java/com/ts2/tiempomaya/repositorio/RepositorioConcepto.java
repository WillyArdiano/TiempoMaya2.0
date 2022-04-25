package com.ts2.tiempomaya.repositorio;

import com.ts2.tiempomaya.modelo.Concepto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioConcepto extends JpaRepository<Concepto,Integer> {

    Concepto findByPalabra(String palabra);

}
