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
import { TerminosYCondicionesComponent } from './pages/terminos-y-condiciones/terminos-y-condiciones.component';
import { RegistroComponent } from './auth/registro/registro.component';

export const routes: Routes = [
   {path:"inicio", component: InicioComponent},
   {path:"acercaDe", component: AcercaDeComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"contacto", component: ContactoComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"iniciarSesion", component: IniciarSesionComponent},
   {path:"turnos", component: TurnosComponent},
   {path:"preguntas", component: PreguntasComponent},
   {path: "terminos-y-condiciones", component: TerminosYCondicionesComponent},
   {path:"politicas", component: PoliticasComponent},
   {path: "registro", component: RegistroComponent},
   {path:"", redirectTo:"/inicio", pathMatch:"full"},
   {path: "**", component:  NotFoundComponent}


];
