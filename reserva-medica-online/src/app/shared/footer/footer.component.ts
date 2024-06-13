import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PoliticasComponent } from './politicas/politicas.component';
import { TerminosYCondicionesComponent } from './terminos-y-condiciones/terminos-y-condiciones.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent, RouterLink, FooterComponent, PoliticasComponent, TerminosYCondicionesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
