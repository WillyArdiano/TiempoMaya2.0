import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Descripcion } from '../modelo/Descripcion';

@Injectable({
  providedIn: 'root'
})
export class DescripcionService {

  private url:string = "http://localhost:7000/tiempomaya/descripcion";

  constructor(private http:HttpClient) { }

  public guardar(descripcion:Descripcion){
    return this.http.post(this.url+"/guardar",descripcion);
  }

  public obtenerDescripcionesConcepto(idConcepto:number){
    return this.http.get<Array<Descripcion>>(this.url+"/descripciones/concepto/"+idConcepto);
  }

  public obtenerDescripcionesUsuario(nombreUsuario:string){
    return this.http.get<Array<Descripcion>>(this.url+"/descripciones/usuario/"+nombreUsuario);
  }

}
