import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elemento } from '../modelo/Elemento';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {

  private url:string = "http://localhost:7000/tiempomaya/elemento";

  constructor(private http:HttpClient) { }

  public obtenerElementos(tipoElemento:string){
    return this.http.get<Array<Elemento>>(this.url+"/elementos/"+tipoElemento);
  }

}
