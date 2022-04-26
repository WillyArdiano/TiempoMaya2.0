import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Concepto } from '../modelo/Concepto';
import { Descripcion } from '../modelo/Descripcion';
import { Usuario } from '../modelo/Usuario';
import { ConceptoService } from '../servicio/concepto.service';
import { DescripcionService } from '../servicio/descripcion.service';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  concepto:string = "";
  descripcion:string = "";
  usuario:any;
  imagen:string = "../../assets/imgs/face1.png";
  tipo:string = "Aldeano";
  publicaciones:Array<Descripcion>;

  constructor(public router:Router, private cookies:CookieService, private usuarioService:UsuarioService, private conceptoService:ConceptoService, private descripcionService:DescripcionService) {
    this.publicaciones = new Array();
    this.usuario = new Usuario("",-1,"","",-1,""); 
    if (!this.cookies.get("usuario")){
      this.router.navigateByUrl("/login");
    } else {
      this.usuarioService.obtenerUsuario(this.cookies.get("usuario")).subscribe(data=>{
        if(data){
          this.usuario = data;
          this.imagen = "../../assets/imgs/face"+(this.usuario.idTipoUsuario-3)+".png";
          if ((this.usuario.idTipoUsuario-3)==1){
            this.tipo = "IMPOSTOR";
          } else if ((this.usuario.idTipoUsuario-3)==1){
            this.tipo = "ALDEANO";
          } else if ((this.usuario.idTipoUsuario-3)==1){
            this.tipo = "SACERDOTE";
          } else if ((this.usuario.idTipoUsuario-3)==1){
            this.tipo = "HALACH UICH";
          }
          this.actualizarDescripciones();
        }
      });
    } 
  }

  ngOnInit(): void {
  }

  public publicar(){
    let conceptoM = (<HTMLInputElement>document.querySelector("#concepto")).value.toUpperCase();
    let desc = (<HTMLTextAreaElement>document.querySelector("#descripcion")).value
    this.conceptoService.obtenerConceptoPalabra(conceptoM).subscribe(data=>{
      if(data){
        this.guardarDescripcion(conceptoM,desc);
      }else{
        let concepto:Concepto = new Concepto(conceptoM,"");
        this.conceptoService.guardar(concepto).subscribe(data=>{
          this.guardarDescripcion(conceptoM,desc);
        });
      }
      alert("Descripción publicada");
    });
  }

  public guardarDescripcion(conceptoM:string,desc:string){
    this.descripcionService.guardar(new Descripcion(-1,this.cookies.get("usuario"),conceptoM,new Date().toLocaleString(),desc)).subscribe(data=>{
      this.actualizarDescripciones();
    });
  }

  public actualizarDescripciones(){
    this.descripcionService.obtenerDescripcionesUsuario(this.cookies.get("usuario")).subscribe(data=>{
      this.publicaciones = data;
      (<HTMLInputElement>document.querySelector("#concepto")).value = "";
      (<HTMLTextAreaElement>document.querySelector("#descripcion")).value = "";
    });
  }
}
