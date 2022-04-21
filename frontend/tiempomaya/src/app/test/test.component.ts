import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public elementos:Array<Usuario>;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.elementos = new Array<Usuario>();
    this.usuarioService.obtenerUsuarios().subscribe(data=>{
      this.elementos = data;
    });
  }

  ngOnInit(): void {
  }

  public ejecutar():void{
    /* ----------- guardar y actualizar usuarios
    let usuario:Usuario = new Usuario("jugador_18",1,"123","2022-10-10",0,"direccion jugador 8");
    this.usuarioService.guardarUsuario(usuario).subscribe(data_s=>{
      this.usuarioService.obtenerUsuarios().subscribe(data=>{
        this.elementos = data;
      })
    });
    */

    /* ----------- autenticar
    let usuario:Usuario = new Usuario("jugador_18",-1,"123","",-1,"");
    this.usuarioService.autenticar(usuario).subscribe(data=>{
      let num:number=data;
      console.log(num);
    });
    */
  }

}
