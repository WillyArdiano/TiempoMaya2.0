package com.ts2.tiempomaya.controlador;

import com.ts2.tiempomaya.modelo.Concepto;
import com.ts2.tiempomaya.servicio.ServicioConcepto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/concepto")
public class ControladorConcepto {

    private ServicioConcepto servicioConcepto;

    public ControladorConcepto(ServicioConcepto servicioConcepto) {
        this.servicioConcepto = servicioConcepto;
    }

    @PostMapping("/guardar")
    public void guardar(@RequestBody Concepto concepto){
        this.servicioConcepto.guardar(concepto);
    }

    @GetMapping("/obtenerConceptos")
    public List<Concepto> obtenerConceptos(){
        return this.servicioConcepto.obtenerConceptos();
    }

    @GetMapping("/test")
    public String testing(){
        return "TESTING FROM SPRING BOOT CONCEPTO";
    }

}
