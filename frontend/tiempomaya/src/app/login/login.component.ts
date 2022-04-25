import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,private cookies: CookieService) { }

  ngOnInit(): void {
    if (this.cookies.get("usuario")){
      this.router.navigateByUrl("/comunidad");
    } 
  }


  public login(){
    let username:string = (<HTMLInputElement>document.getElementById("username")).value;
    let password:string =  (<HTMLInputElement>document.getElementById("password")).value;
    if (username=="" && password==""){
      alert("Ingresa tu nombre de usuario y tu password");
      return;
    }
    if (username==""){
      alert("Ingresa tu nombre de usuario");
      return;
    }
    
    if (password==""){
      alert("Ingresa tu contraseña");
      return;
    }
    this.cookies.set("usuario",username);
    this.router.navigateByUrl("/perfil");
  }

}
