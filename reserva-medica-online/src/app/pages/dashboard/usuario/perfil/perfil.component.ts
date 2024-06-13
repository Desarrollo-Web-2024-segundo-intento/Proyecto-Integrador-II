import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { UsuarioService } from '../../../../services/usuario.service';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',

})
export class PerfilComponent implements OnInit {
  title: string="Perfil";
  // traer profesionales segun especialidad seleccionada
  userData: any = {};
  updated: boolean = false;

  //constructor(private usuarioService: UsuarioService) { }
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    //this.usuarioData = this.usuarioService.getUsuarioData();
    // traer profesionales segun especialidad seleccionada
    this.apiService.getUserData().subscribe(data => {
      this.userData = data;
  });

  // actualizarDatos(): void {
  //   this.usuarioService.updateUsuarioData(this.usuarioData);
  //   console.log('Datos personales actualizados:', this.usuarioData);
  //   this.updated = true;
  // }
  // guardarDatos(): void {
  //   this.usuarioService.saveUsuarioData(this.usuarioData);
  //   console.log('Datos personales guardados:', this.usuarioData);
  //   alert('Datos guardados exitosamente');
  //   this.updated = false;
  // }
  }
}
