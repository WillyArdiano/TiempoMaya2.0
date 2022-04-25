import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Juego } from '../modelo/Juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private url:string = "http://localhost:7000/tiempomaya/juego";

  constructor(private http:HttpClient) { }

  public guardar(juego:Juego){
    return this.http.post(this.url+"/guardar",juego);
  }

  public obtenerJuegos(){
    return this.http.get<Array<Juego>>(this.url+"/obtenerJuegos");
  }

  public obtenerJuegosUsuario(nombreUsuario:string){
    return this.http.get<Array<Juego>>(this.url+"/obtenerJuegos/"+nombreUsuario);
  }

}
