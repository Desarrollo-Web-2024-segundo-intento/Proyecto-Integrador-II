import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [HeaderComponent, NavComponent]
})
export class HeaderComponent {
  title= "Reserva Médica Online"
}
