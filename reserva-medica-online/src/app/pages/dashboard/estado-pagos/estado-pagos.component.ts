import {NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estado-pagos',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './estado-pagos.component.html',
  styleUrl: './estado-pagos.component.css'
})
export class EstadoPagosComponent {
  title="Estado";

}
