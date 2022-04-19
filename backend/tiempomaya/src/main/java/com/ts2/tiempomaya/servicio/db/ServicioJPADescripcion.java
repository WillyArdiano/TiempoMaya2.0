package com.ts2.tiempomaya.servicio.db;

import com.ts2.tiempomaya.modelo.Descripcion;
import com.ts2.tiempomaya.repositorio.RepositorioDescripcion;
import com.ts2.tiempomaya.servicio.ServicioDescripcion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioJPADescripcion implements ServicioDescripcion {

    private RepositorioDescripcion repositorioDescripcion;

    public ServicioJPADescripcion(RepositorioDescripcion repositorioDescripcion) {
        this.repositorioDescripcion = repositorioDescripcion;
    }

    public List<Descripcion> obtenerDescripcionesConcepto(int idConcepto) {
        return this.repositorioDescripcion.findAllByIdConcepto(idConcepto);
    }

    @Override
    public List<Descripcion> obtenerDescripcionesUsuario(String nombreUsuario) {
        return this.repositorioDescripcion.findAllByNombreUsuarioAutor(nombreUsuario);
    }

    @Override
    public void guardar(Descripcion descripcion) {
        this.repositorioDescripcion.save(descripcion);
    }
}
