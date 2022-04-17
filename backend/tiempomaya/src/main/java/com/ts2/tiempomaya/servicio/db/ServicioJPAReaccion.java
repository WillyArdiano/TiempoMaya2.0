package com.ts2.tiempomaya.servicio.db;

import com.ts2.tiempomaya.modelo.Reaccion;
import com.ts2.tiempomaya.repositorio.RepositorioReaccion;
import com.ts2.tiempomaya.servicio.ServicioReaccion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioJPAReaccion implements ServicioReaccion {

    private RepositorioReaccion repositorioReaccion;

    public ServicioJPAReaccion(RepositorioReaccion repositorioReaccion) {
        this.repositorioReaccion = repositorioReaccion;
    }

    @Override
    public List<Reaccion> obtenerReaccionesDescripcion(int idDescripcion) {
        return this.repositorioReaccion.findAllByIdDescripcion(idDescripcion);
    }

    @Override
    public void guardar(Reaccion reaccion) {
        this.repositorioReaccion.save(reaccion);
    }
}
