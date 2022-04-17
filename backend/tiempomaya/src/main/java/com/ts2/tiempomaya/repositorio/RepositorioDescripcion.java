package com.ts2.tiempomaya.repositorio;

import com.ts2.tiempomaya.modelo.Descripcion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepositorioDescripcion extends JpaRepository<Descripcion,Integer> {

    List<Descripcion> findAllByIdConcepto(int idConcepto);

}
