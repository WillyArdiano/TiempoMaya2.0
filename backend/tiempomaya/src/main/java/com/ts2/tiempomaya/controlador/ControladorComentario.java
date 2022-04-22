package com.ts2.tiempomaya.controlador;

import com.ts2.tiempomaya.modelo.Comentario;
import com.ts2.tiempomaya.servicio.ServicioComentario;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/comentario")
public class ControladorComentario {

    private ServicioComentario servicioComentario;

    public ControladorComentario(ServicioComentario servicioComentario) {
        this.servicioComentario = servicioComentario;
    }

    @PostMapping("/guardar")
    public void guardar(@RequestBody Comentario comentario){
        this.servicioComentario.guardar(comentario);
    }

    @GetMapping("/comentarios/{idDescripcion}")
    public List<Comentario> obtenerComentariosDescripcion(@PathVariable int idDescripcion) {
        return this.servicioComentario.obtenerComentariosDescripcion(idDescripcion);
    }

}
