import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Concepto } from '../modelo/Concepto';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  private url:string = "http://localhost:7000/tiempomaya/concepto";

  constructor(private http:HttpClient) { }

  public guardar(concepto:Concepto){
    return this.http.post(this.url+"/guardar",concepto);
  }

  public obtenerConceptos(){
    return this.http.get<Array<Concepto>>(this.url+"/obtenerConceptos");
  }

  public obtenerConcepto(idConcepto:number){
    return this.http.get<Concepto>(this.url+"/"+idConcepto);
  }

}
