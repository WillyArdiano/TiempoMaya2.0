package com.ts2.tiempomaya.controlador;

import com.ts2.tiempomaya.modelo.Descripcion;
import com.ts2.tiempomaya.servicio.ServicioDescripcion;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/descripcion")
public class ControladorDescripcion {

    private ServicioDescripcion servicioDescripcion;

    public ControladorDescripcion(ServicioDescripcion servicioDescripcion) {
        this.servicioDescripcion = servicioDescripcion;
    }

    @PostMapping("/guardar")
    public void guardar(@RequestBody Descripcion descripcion){
        this.servicioDescripcion.guardar(descripcion);
    }

    @GetMapping("/descripciones/{idConcepto}")
    public List<Descripcion> obtenerDescripcionesConcepto(@PathVariable int idConcepto){
        return this.servicioDescripcion.obtenerDescripcionesConcepto(idConcepto);
    }

    @GetMapping("/descripciones/usuario/{nombreUsuario}")
    public List<Descripcion> obtenerDescripcionesUsuario(@PathVariable String nombreUsuario){
        return this.servicioDescripcion.obtenerDescripcionesUsuario(nombreUsuario);
    }

    @GetMapping("/test")
    public String testing(){
        return "TESTING FROM SPRING BOOT DESCRIPCION";
    }

}
