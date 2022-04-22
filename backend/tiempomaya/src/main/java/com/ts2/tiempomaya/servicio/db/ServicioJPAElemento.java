package com.ts2.tiempomaya.servicio.db;

import com.ts2.tiempomaya.modelo.Elemento;
import com.ts2.tiempomaya.repositorio.RepositorioElemento;
import com.ts2.tiempomaya.servicio.ServicioElemento;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioJPAElemento implements ServicioElemento {

    private RepositorioElemento repositorioElemento;

    public ServicioJPAElemento(RepositorioElemento repositorioElemento) {
        this.repositorioElemento = repositorioElemento;
    }

    @Override
    public List<Elemento> obtenerElementos(String tipoElemento) {
        return this.repositorioElemento.findAllByTipoElemento(tipoElemento);
    }
}
