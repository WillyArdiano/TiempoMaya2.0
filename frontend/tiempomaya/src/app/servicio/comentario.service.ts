import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../modelo/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private url:string = "http://localhost:7000/tiempomaya/comentario";

  constructor(private http:HttpClient) { }

  public guardar(comentario:Comentario){
    return this.http.post(this.url+"/guardar",comentario);
  }

  public obtenerComentariosDescripcion(idDescripcion:number){
    return this.http.get<Array<Comentario>>(this.url+"/comentarios/"+idDescripcion);
  }
  
}
