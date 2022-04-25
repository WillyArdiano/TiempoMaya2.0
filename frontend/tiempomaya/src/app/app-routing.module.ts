import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"memoria",component:MemoriaComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"login",component:LoginComponent},
  {path:"registro",component:RegistroComponent},
  {path:"comunidad",component:PublicacionComponent},
  {path:"biblioteca",component:BibliotecaComponent},
  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
