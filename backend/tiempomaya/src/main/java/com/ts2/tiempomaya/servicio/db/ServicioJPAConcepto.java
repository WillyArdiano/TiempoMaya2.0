package com.ts2.tiempomaya.servicio.db;

import com.ts2.tiempomaya.modelo.Concepto;
import com.ts2.tiempomaya.repositorio.RepositorioConcepto;
import com.ts2.tiempomaya.servicio.ServicioConcepto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioJPAConcepto implements ServicioConcepto {

    private RepositorioConcepto repositorioConcepto;

    public ServicioJPAConcepto(RepositorioConcepto repositorioConcepto) {
        this.repositorioConcepto = repositorioConcepto;
    }

    @Override
    public List<Concepto> obtenerConceptos() {
        return repositorioConcepto.findAll();
    }

    @Override
    public void guardar(Concepto concepto) {
        this.repositorioConcepto.save(concepto);
    }
}
