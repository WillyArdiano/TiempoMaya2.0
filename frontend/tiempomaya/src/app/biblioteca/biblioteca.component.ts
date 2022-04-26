import { Component, OnInit } from '@angular/core';
import { Elemento } from '../modelo/Elemento';
import { ElementoService } from '../servicio/elemento.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  tipoElemento = "kin";
  buscado = "";
  elementos: Array<Elemento>;

  constructor(private servicioElemento: ElementoService) {
    this.elementos = new Array();
    this.actualizarElementos();
  }

  public revisar() {
    if (this.buscado) {
      let nombres: NodeList = (<NodeList>document.querySelectorAll(".nombre-biblioteca"));
      nombres.forEach(elemento => {
        let pa = (<HTMLHeadingElement>elemento).parentNode;
        let pa2 = pa?.parentNode;
        if (elemento.textContent?.toUpperCase().includes(this.buscado.toUpperCase())) {
          (<HTMLDivElement>pa2).style.display = "flex";
        } else {
          (<HTMLDivElement>pa2).style.display = "none";
        }
      });
    } else {
      let nombres: NodeList = (<NodeList>document.querySelectorAll(".nombre-biblioteca"));
      nombres.forEach(elemento => {
        let pa = (<HTMLHeadingElement>elemento).parentNode;
        let pa2 = pa?.parentNode;
        (<HTMLDivElement>pa2).style.display = "flex";
      });
    }
  }

  ngOnInit(): void {
  }

  public actualizarElementos() {
    this.servicioElemento.obtenerElementos(this.tipoElemento).subscribe(data => {
      this.elementos = data;
    });
  }

}
