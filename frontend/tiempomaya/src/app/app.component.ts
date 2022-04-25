import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiempomaya';
  logeado = false;

  constructor(public router: Router, private cookies:CookieService, public location:Location){
    console.log(this.cookies.get("usuario"));
    if (this.cookies.get("usuario")){
      this.logeado = true;
    } else {
      this.logeado = false;
      if (location.path(false)!="/login" && location.path(false)!="/registro"){
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl("/login");
      }
    }
  }

  public logout(){
    this.cookies.delete("usuario");
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["login"]);
  }
}
