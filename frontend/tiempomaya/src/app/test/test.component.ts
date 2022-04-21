import { Component, OnInit } from '@angular/core';
import { Concepto } from '../modelo/Concepto';
import { Usuario } from '../modelo/Usuario';
import { ConceptoService } from '../servicio/concepto.service';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public elementos:Array<Concepto>;
  public valor:any = 0;

  constructor(
    private usuarioService: UsuarioService,
    private conceptoService:ConceptoService
  ) {
    this.elementos = new Array<Concepto>();
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
    
  }

}
