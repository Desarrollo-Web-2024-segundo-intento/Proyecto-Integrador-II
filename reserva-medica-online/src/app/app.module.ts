import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './auth/registro/registro.component';
import { TerminosYCondicionesComponent } from './pages/terminos-y-condiciones/terminos-y-condiciones.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [

  ],

})
export class AppModule { }
