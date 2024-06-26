import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PoliticasComponent } from './shared/footer/politicas/politicas.component';
import { PreguntasComponent } from './shared/footer/preguntas/preguntas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { TerminosYCondicionesComponent } from './shared/footer/terminos-y-condiciones/terminos-y-condiciones.component';
import { RegistroComponent } from './auth/registro/registro.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, InicioComponent, ServiciosComponent, ContactoComponent,
      AcercaDeComponent, IniciarSesionComponent, PreguntasComponent, PoliticasComponent, TerminosYCondicionesComponent, RegistroComponent
    ]
  })
export class AppComponent {
  title = 'reserva-medica-online';
}
