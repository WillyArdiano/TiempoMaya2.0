import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { MemoriaComponent } from './memoria/memoria.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"memoria",component:MemoriaComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
