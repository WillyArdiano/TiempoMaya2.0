import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public verifyUser(event:any) {
    let wordSearch:string = event.target.value ;
    if (wordSearch.includes(" ")){
      (<HTMLInputElement>document.querySelector("#usuario")).value = wordSearch.replace(" ","");
    }
    setTimeout(() => {
      if (wordSearch == event.target.value) {
        if (event.target.value) {
          (<HTMLImageElement>document.querySelector("#loading")).style.display = "";
          if (wordSearch==="yelbetto"){
            (<HTMLImageElement>document.querySelector("#loading")).src = "../../assets/imgs/check.png";
            (<HTMLInputElement>document.querySelector("#usuario")).style.backgroundColor = "#2196f3";
            (<HTMLImageElement>document.querySelector("#usuario")).setAttribute("status","1");
            (<HTMLInputElement>document.querySelector("#messageUser")).textContent = "";
            (<HTMLInputElement>document.querySelector("#messageUser")).style.backgroundColor = "transparent";
          } else {
            (<HTMLImageElement>document.querySelector("#loading")).src = "../../assets/imgs/error.png";
            (<HTMLInputElement>document.querySelector("#usuario")).style.backgroundColor = "red";
            (<HTMLImageElement>document.querySelector("#usuario")).setAttribute("status","0");
            (<HTMLInputElement>document.querySelector("#messageUser")).textContent = "USUARIO NO DISPONIBLE";
            (<HTMLInputElement>document.querySelector("#messageUser")).style.backgroundColor = "red";
          }
        } 
      }
    }, 2000);
  }

  public verifyEmpty(event:any) {
    let wordSearch:string = event.target.value ;
    if (wordSearch===" " || wordSearch === ""){
      //(<HTMLInputElement>event.target).style.backgroundColor = "red";
    } else {
      (<HTMLInputElement>event.target).style.backgroundColor = "#2196f3";
    }
  }

  public register(){
    let user:string = (<HTMLInputElement>document.querySelector("#usuario")).value;
    let nombre:string = (<HTMLInputElement>document.querySelector("#nombre")).value;
    let nacimiento:string = (<HTMLInputElement>document.querySelector("#nacimiento")).value;
    let password:string = (<HTMLInputElement>document.querySelector("#password")).value;
    let password2:string = (<HTMLInputElement>document.querySelector("#password2")).value;
    if ((<HTMLInputElement>document.querySelector("#usuario")).getAttribute("status")=="1"){
      if (nombre!==""){
        if (nacimiento!==""){
          if (password===password2 && password!==""){
            alert("todo correcto");
            return;
          } else {
            if (password!==password2 && password!=="" && password2!==""){
              (<HTMLInputElement>document.querySelector("#password")).style.backgroundColor="red";
              (<HTMLInputElement>document.querySelector("#password2")).style.backgroundColor="red";
              alert("No coinciden las contraseñas");
              return;
            }
            if (password===""){
              (<HTMLInputElement>document.querySelector("#password")).style.backgroundColor="red";
            }
            if (password2===""){
              (<HTMLInputElement>document.querySelector("#password2")).style.backgroundColor="red";
            }
          }
        }
      }
    } 
    if (user===""){
      (<HTMLInputElement>document.querySelector("#usuario")).style.backgroundColor="red";
    }
    if (nombre===""){
      (<HTMLInputElement>document.querySelector("#nombre")).style.backgroundColor="red";
    }
    if (nacimiento===""){
      (<HTMLInputElement>document.querySelector("#nacimiento")).style.backgroundColor="red";
    }
    if (password===""){
      (<HTMLInputElement>document.querySelector("#password")).style.backgroundColor="red";
    }
    if (password2===""){
      (<HTMLInputElement>document.querySelector("#password2")).style.backgroundColor="red";
    }
    alert("Rellena los campos en rojo");
  }
}
