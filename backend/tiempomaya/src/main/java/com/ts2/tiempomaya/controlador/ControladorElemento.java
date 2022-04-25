package com.ts2.tiempomaya.controlador;

import com.ts2.tiempomaya.modelo.Elemento;
import com.ts2.tiempomaya.servicio.ServicioElemento;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/elemento")
public class ControladorElemento {

    private ServicioElemento servicioElemento;

    public ControladorElemento(ServicioElemento servicioElemento) {
        this.servicioElemento = servicioElemento;
    }

    @GetMapping("/elementos/{tipoElemento}")
    public List<Elemento> obtenerComentariosDescripcion(@PathVariable String tipoElemento) {
        return this.servicioElemento.obtenerElementos(tipoElemento);
    }

}
