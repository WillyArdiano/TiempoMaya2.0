package com.ts2.tiempomaya.controlador;

import com.ts2.tiempomaya.modelo.Comentario;
import com.ts2.tiempomaya.modelo.Reaccion;
import com.ts2.tiempomaya.servicio.ServicioComentario;
import com.ts2.tiempomaya.servicio.ServicioReaccion;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/reaccion")
public class ControladorReaccion {

    ServicioReaccion servicioReaccion;

    public ControladorReaccion(ServicioReaccion servicioReaccion) {
        this.servicioReaccion = servicioReaccion;
    }

    @PostMapping("/guardar")
    public void guardarReaccion(@RequestBody Reaccion reaccion){
        this.servicioReaccion.guardar(reaccion);
    }

    @GetMapping("/reacciones/{idDescripcion}")
    public List<Reaccion> obtenerReaccionesDescripcion(@PathVariable int idDescripcion){
        return this.servicioReaccion.obtenerReaccionesDescripcion(idDescripcion);
    }

    @GetMapping("/test")
    public String test(){
        return "TESTING FROM REACCION CONTROLLER";
    }
}
