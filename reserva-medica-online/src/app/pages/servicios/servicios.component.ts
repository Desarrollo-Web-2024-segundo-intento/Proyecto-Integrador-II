import { Component } from '@angular/core';
import { EspecialMedicasComponent } from '../especial-medicas/especial-medicas.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServiciosComponent, EspecialMedicasComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
imgBajaComplejidad="assets/img/imga.png";
imgMedianaComplejidad="assets/img/imgb.png";
imgAltaComplejidad="assets/img/imgc.png";
imgObraSocial1="assets/img/medife.png";
imgObraSocial2="assets/img/osde.png";
imgObraSocial3="assets/img/sancor.png";
imgObraSocial4="assets/img/galeno.jpg";
imgObraSocial5="assets/img/Prevencion_Salud.png";
imgObraSocial6="assets/img/avalian.png";
imgObraSocial7="assets/img/pami.jpg";
imgObraSocial8="assets/img/apross.jpg";
imgObraSocial9="assets/img/swissmedical.png"
imgObraSocial10="assets/img/federadasalud.jpg";
imgObraSocial11="assets/img/sipssa.jpg";
}
