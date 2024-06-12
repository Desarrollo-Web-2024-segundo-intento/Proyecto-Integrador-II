import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',

})
export class PerfilComponent implements OnInit {
  title: string="Perfil";
  usuarioData: any = {};
  updated: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    //this.usuarioData = this.usuarioService.getUsuarioData();
  }

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
