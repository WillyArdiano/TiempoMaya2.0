package com.ts2.tiempomaya.controlador;

import com.ts2.tiempomaya.modelo.Comentario;
import com.ts2.tiempomaya.modelo.Concepto;
import com.ts2.tiempomaya.servicio.ServicioComentario;
import com.ts2.tiempomaya.servicio.ServicioConcepto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
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

    @GetMapping("/comentarios/{idConcepto}")
    public List<Comentario> obtenerComentariosConcepto(@PathVariable int idConcepto) {
        return this.servicioComentario.obtenerComentariosConcepto(idConcepto);
    }

    @GetMapping("/test")
    public String test(){
        return "TESTING FROM COMENTARIO CONTROLLER";
    }
}
