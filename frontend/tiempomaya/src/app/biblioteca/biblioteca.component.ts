import { Component, OnInit } from '@angular/core';
import { Elemento } from '../modelo/Elemento';
import { ElementoService } from '../servicio/elemento.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  tipoElemento = "";
  elementos:Array<Elemento>;

  constructor(private servicioElemento:ElementoService) {
    this.elementos = new Array();
    this.actualizarElementos();
  }

  ngOnInit(): void {
  }

  public actualizarElementos(){
    this.servicioElemento.obtenerElementos(this.tipoElemento).subscribe(data=>{
      this.elementos = data;
    });
  }

}
