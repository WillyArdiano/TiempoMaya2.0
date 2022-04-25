import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { CookieService } from 'ngx-cookie-service';

import { UsuarioService } from './servicio/usuario.service';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MemoriaComponent,
    CalculadoraComponent,
    HomeComponent,
    PerfilComponent,
    TestComponent,
    LoginComponent,
    RegistroComponent,
    PublicacionComponent,
    BibliotecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
