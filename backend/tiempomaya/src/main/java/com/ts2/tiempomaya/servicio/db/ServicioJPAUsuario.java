package com.ts2.tiempomaya.servicio.db;

import com.ts2.tiempomaya.modelo.Usuario;
import com.ts2.tiempomaya.repositorio.RepositorioUsuario;
import com.ts2.tiempomaya.servicio.ServicioUsuario;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioJPAUsuario implements ServicioUsuario {

    private RepositorioUsuario repositorioUsuario;

    public ServicioJPAUsuario(RepositorioUsuario repositorioUsuario) {
        this.repositorioUsuario = repositorioUsuario;
    }

    @Override
    public List<Usuario> obtenerUsuarios(){
        return repositorioUsuario.findAll();
    }

    @Override
    public void guardar(Usuario usuario) {
        repositorioUsuario.save(usuario);
    }

    @Override
    public Usuario obtenerUsuario(String nombreUsuario) {
        return this.repositorioUsuario.findByNombreUsuario(nombreUsuario);
    }
}
