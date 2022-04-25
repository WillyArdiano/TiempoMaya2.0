import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reaccion } from '../modelo/Reaccion';

@Injectable({
  providedIn: 'root'
})
export class ReaccionService {

  private url:string = "http://localhost:7000/tiempomaya/reaccion";

  constructor(private http:HttpClient) { }

  public guardar(reaccion:Reaccion){
    return this.http.post(this.url+"/guardar",reaccion);
  }

  public obtenerReaccionesDescripcion(idDescripcion:number){
    return this.http.get<Array<Reaccion>>(this.url+"/reacciones/"+idDescripcion);
  }

}
