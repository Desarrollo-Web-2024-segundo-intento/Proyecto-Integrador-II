
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuarioData: Usuario = {
    apellido: '',
    nombre: '',
    telefono: '',
    dni: '',
    obraSocial: '',
    email: '',
    id: 0
  };



  constructor(private router: Router, private usuarioService: UsuarioService) { }

  grabarDatosPersonales(): void {
    this.usuarioService.setUsuarioData(this.usuarioData);
    console.log('Datos personales guardados:', this.usuarioData);
    this.router.navigate(['/dashboard/usuario/perfil']);
  };

    actualizarDatos(): void {
    this.usuarioService.updateUsuarioData(this.usuarioData);
    console.log('Datos personales actualizados:', this.usuarioData);
  }
}

