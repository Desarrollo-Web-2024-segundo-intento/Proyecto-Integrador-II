import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';


export const routes: Routes = [
   {path:"inicio", component: InicioComponent},
   {path:"acercaDe", component: AcercaDeComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"contacto", component: ContactoComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"iniciarSesion", component: IniciarSesionComponent},
   {path:"turnos", component: TurnosComponent},
   {path:"preguntas", component: PreguntasComponent},
   {path:"politicas", component: PoliticasComponent},
   {path:"", redirectTo:"/inicio", pathMatch:"full"},
   {path: "**", component:  NotFoundComponent}

];
