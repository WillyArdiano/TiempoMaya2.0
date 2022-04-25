import { Component, OnInit } from '@angular/core';
import { Descripcion } from '../modelo/Descripcion';
import { DescripcionService } from '../servicio/descripcion.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {


  publicaciones:Array<Descripcion>;
  items: any;
  constructor(private descripcionService:DescripcionService) {
    this.publicaciones= new Array();
    this.descripcionService.obtenerDescripciones().subscribe(data=>{
      this.publicaciones = data;
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.items = ["1", "2", "3", "4"];
      (<HTMLDivElement>document.getElementById("loadingCommunity")).style.display ="none";
      (<HTMLDivElement>document.getElementById("community")).style.display ="flex";
      (<any>document.getElementById("titleCommunity")).style.display ="flex";
    }, 2000)
  }

  public votation(div: any, positive: number) {
    let parent = (<HTMLDivElement>div.target).parentNode?.parentNode;
    let votes:NodeListOf<HTMLDivElement> = ((<HTMLDivElement>parent).querySelectorAll(".profile-element"));
    console.log(parent);
    if (positive == 1) {
      //codigo para dar un voto positivo
      (<HTMLDivElement>votes[0]).classList.remove("notClicked");
      (<HTMLDivElement>votes[0]).classList.add("clicked");
      (<HTMLDivElement>votes[1]).classList.remove("clicked");
      (<HTMLDivElement>votes[1]).classList.add("notClicked");
    } else {
      //codigo para dar un voto negativo
      (<HTMLDivElement>votes[1]).classList.remove("notClicked");
      (<HTMLDivElement>votes[1]).classList.add("clicked");
      (<HTMLDivElement>votes[0]).classList.remove("clicked");
      (<HTMLDivElement>votes[0]).classList.add("notClicked");
    }
  }
}
