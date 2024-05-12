import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PoliticasComponent } from '../../pages/politicas/politicas.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent, RouterLink, FooterComponent, PoliticasComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
