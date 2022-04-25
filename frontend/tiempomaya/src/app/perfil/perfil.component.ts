import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public router:Router, private cookies:CookieService) { 
    if (!this.cookies.get("usuario")){
      this.router.navigateByUrl("/login");
    } else {
      console.log("todo correcto");
    } 
  }

  ngOnInit(): void {
  }

}
