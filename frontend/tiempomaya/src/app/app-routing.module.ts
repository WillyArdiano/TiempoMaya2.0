import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"memoria",component:MemoriaComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"test",component:TestComponent},
  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
