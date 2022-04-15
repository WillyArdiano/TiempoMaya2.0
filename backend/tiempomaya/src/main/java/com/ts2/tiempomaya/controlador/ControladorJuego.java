package com.ts2.tiempomaya.controlador;

import com.ts2.tiempomaya.modelo.Juego;
import com.ts2.tiempomaya.servicio.ServicioJuego;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/juego")
public class ControladorJuego {

    private ServicioJuego servicioJuego;

    public ControladorJuego(ServicioJuego servicioJuego) {
        this.servicioJuego = servicioJuego;
    }

    @PostMapping("/guardar")
    public void guardar(@RequestBody Juego juego){
        this.servicioJuego.guardar(juego);
    }

    @GetMapping("/obtenerJuegos")
    public List<Juego> obtenerJuego(){
        return this.servicioJuego.obtenerJuegos();
    }

    @GetMapping("/test")
    public String testing(){
        return "TESTING FROM SPRING BOOT JUEGO";
    }

}
