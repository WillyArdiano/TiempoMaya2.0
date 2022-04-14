package com.ts2.tiempomaya.controlador;

import com.ts2.tiempomaya.modelo.Usuario;
import com.ts2.tiempomaya.servicio.ServicioUsuario;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/usuario")
public class ControladorUsuario {

    private ServicioUsuario servicioUsuario;

    public ControladorUsuario(ServicioUsuario servicioUsuario) {
        this.servicioUsuario = servicioUsuario;
    }

    @PostMapping("/guardar")
    public void guardar(@RequestBody Usuario usuario){
        this.servicioUsuario.guardar(usuario);
    }

    @GetMapping("/obtenerUsuarios")
    public List<Usuario> obtenerUsuarios(){
        return this.servicioUsuario.obtenerUsuarios();
    }

    @GetMapping("/test")
    public String testing(){
        return "TESTING FROM SPRING BOOT";
    }

}
