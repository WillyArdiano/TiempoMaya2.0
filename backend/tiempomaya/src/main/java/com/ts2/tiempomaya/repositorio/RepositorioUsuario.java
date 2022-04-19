package com.ts2.tiempomaya.repositorio;

import com.ts2.tiempomaya.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioUsuario extends JpaRepository<Usuario,String> {

    public Usuario findByNombreUsuario(String nombreUsuario);

}
