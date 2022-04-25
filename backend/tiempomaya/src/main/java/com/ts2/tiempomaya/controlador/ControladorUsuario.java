package com.ts2.tiempomaya.controlador;

import com.ts2.tiempomaya.modelo.Usuario;
import com.ts2.tiempomaya.servicio.ServicioUsuario;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
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

    @PostMapping("/aut")
    public int autenticar(@RequestBody Usuario usuario){
        try {
            Usuario usuarioDB = servicioUsuario.obtenerUsuario(usuario.getNombreUsuario());
            if(!Objects.isNull(usuario) && usuario.getContrasenia().equals(usuarioDB.getContrasenia())){
                return 1;
            }else{
                return 0;
            }
        }catch (Exception exception){
            return 0;
        }
    }


}
