import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, InicioComponent, ServiciosComponent, ContactoComponent, 
      AcercaDeComponent, IniciarSesionComponent]
})
export class AppComponent {
  title = 'reserva-medica-online';
}
