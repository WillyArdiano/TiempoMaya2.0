import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/Usuario';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public elementos:Array<Usuario>;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.elementos = new Array<Usuario>();
  }

  ngOnInit(): void {
  }

}
