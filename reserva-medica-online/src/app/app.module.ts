import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './auth/registro/registro.component';
import { TerminosYCondicionesComponent } from './shared/footer/terminos-y-condiciones/terminos-y-condiciones.component';
import { PoliticasComponent } from './shared/footer/politicas/politicas.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
import { CalendarModule } from "primeng/calendar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
  ],
  declarations: [

  ],

})
export class AppModule { }
