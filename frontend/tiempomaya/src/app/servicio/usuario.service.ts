import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../modelo/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  private url:string = "http://localhost:7000/tiempomaya/usuario";

  public obtenerUsuarios():Observable<Array<Usuario>>{
    return this.http.get<Array<Usuario>>(this.url+"/usuarios");
  }

  public guardarUsuario(usuario:Usuario){
    this.http.post<Usuario>(this.url+"/guardar",usuario);
  }

  public autenticar(usuario:Usuario){
    return this.http.post<Usuario>(this.url+"/aut",usuario);
  }

}
