import { Component, OnInit } from '@angular/core';
import { Comentario } from '../modelo/Comentario';
import { Concepto } from '../modelo/Concepto';
import { Descripcion } from '../modelo/Descripcion';
import { Juego } from '../modelo/Juego';
import { Reaccion } from '../modelo/Reaccion';
import { Usuario } from '../modelo/Usuario';
import { ComentarioService } from '../servicio/comentario.service';
import { ConceptoService } from '../servicio/concepto.service';
import { DescripcionService } from '../servicio/descripcion.service';
import { JuegoService } from '../servicio/juego.service';
import { ReaccionService } from '../servicio/reaccion.service';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public elementos:Array<Juego>;
  public valor:any = "";

  constructor(
    private usuarioService: UsuarioService,
    private conceptoService:ConceptoService,
    private juegoService:JuegoService,
    private descripcionService:DescripcionService,
    private comentarioService:ComentarioService,
    private reaccionService:ReaccionService
  ) {
    this.elementos = new Array<Juego>();
  }

  ngOnInit(): void {
  }

  public ejecutar():void{
    /* 
    // ----------- GUARDAR Y ACTUALIZAR USUARIOS
    let usuario:Usuario = new Usuario("jugador_18",1,"123","2022-10-10",0,"direccion jugador 8");
    this.usuarioService.guardarUsuario(usuario).subscribe(data_s=>{
      this.usuarioService.obtenerUsuarios().subscribe(data=>{
        this.elementos = data;
      })
    });

    // ----------- AUTENTICAR USUARIO
    let usuario:Usuario = new Usuario("jugador_18",-1,"123","",-1,"");
    this.usuarioService.autenticar(usuario).subscribe(data=>{
      let num:number=data;
      console.log(num);
    });
    */
    
    /*
    // --INSERTAR CONCEPTO
    let concepto:Concepto = new Concepto(-1,'palabra n','significado de la palabra');
    this.conceptoService.guardar(concepto).subscribe();
    
    //  OBTENER CONCEPTOS
    this.conceptoService.obtenerConceptos().subscribe(data=>{
      this.elementos = data;
    });
    
    
    //  OBTENER CONCEPTO
    this.conceptoService.obtenerConcepto(this.valor).subscribe(data=>{
      let concepto:Concepto = data;
      console.log(this.valor);
      console.log(concepto);
    });
    */

    /*
    // INSERTAR JUEGO
    let juego:Juego = new Juego(-1,"jugador_7",100,"00:01:30",2,3,"2022-04-21 12:38:33.000");
    this.juegoService.guardar(juego).subscribe();
    

    //OBTENER JUEGOS
    this.juegoService.obtenerJuegos().subscribe(data=>{
      this.elementos = data;
    });

  

    this.juegoService.obtenerJuegosUsuario(this.valor).subscribe(data=>{
      let juegosUsuario:Array<Juego> = new Array<Juego>();
      juegosUsuario = data;
      console.log(juegosUsuario);
    });
    */

    /*
    //INSERTAR DESCRIPCION 
    let descripcion:Descripcion = new Descripcion(-1,"jugador_7",3,"2022-04-21 06:38:37.000","Este es el contenido de la descripcion");
    this.descripcionService.guardar(descripcion).subscribe();
    

    this.descripcionService.obtenerDescripcionesConcepto(this.valor).subscribe(data=>{
      let descripciones:Array<Descripcion> = new Array<Descripcion>();
      descripciones = data;
      console.log(descripciones);
    });
    

    this.descripcionService.obtenerDescripcionesUsuario(this.valor).subscribe(data=>{
      let descripciones:Array<Descripcion> = new Array<Descripcion>();
      descripciones = data;
      console.log(descripciones);
    });

    */

    /*
    // INSERTAR COMENTARIO
    let comentario:Comentario = new Comentario(-1,"jugador_6","Este es el contenido del comentario","2022-04-21 21:08:31.000",1);
    this.comentarioService.guardar(comentario).subscribe();
    

    // COMENTARIOS POR DESCRIPCION
    this.comentarioService.obtenerComentariosDescripcion(this.valor).subscribe(data=>{
      let comentarios:Array<Comentario> = new Array<Comentario>();
      comentarios = data;
      console.log(comentarios);
    });
    */

    /*
    //INSERTAR REACCION
    let reaccion:Reaccion = new Reaccion(-1,"jugador_5",3,"2022-04-21 21:44:01.000",1);
    this.reaccionService.guardar(reaccion).subscribe();
    

    this.reaccionService.obtenerReaccionesDescripcion(this.valor).subscribe(data=>{
      let reacciones:Array<Reaccion> = new Array<Reaccion>();
      reacciones = data;
      console.log(reacciones); 
    })
    */
    

  }

}
