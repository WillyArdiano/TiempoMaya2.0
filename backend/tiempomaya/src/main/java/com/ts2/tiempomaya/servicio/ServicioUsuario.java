package com.ts2.tiempomaya.servicio;

import com.ts2.tiempomaya.modelo.Usuario;

import java.util.List;

public interface ServicioUsuario {
    List<Usuario> obtenerUsuarios();
    void guardar(Usuario usuario);
}
