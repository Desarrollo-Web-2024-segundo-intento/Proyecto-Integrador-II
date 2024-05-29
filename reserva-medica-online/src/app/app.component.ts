import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { TerminosYCondicionesComponent } from './pages/terminos-y-condiciones/terminos-y-condiciones.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, InicioComponent, ServiciosComponent, ContactoComponent,
      AcercaDeComponent, IniciarSesionComponent, PreguntasComponent, PoliticasComponent, TerminosYCondicionesComponent]
})
export class AppComponent {
  title = 'reserva-medica-online';
}
