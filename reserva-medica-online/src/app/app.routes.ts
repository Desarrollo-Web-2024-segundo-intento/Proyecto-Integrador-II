import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';


export const routes: Routes = [
   {path:"inicio", component: InicioComponent},
   {path:"acercaDe", component: AcercaDeComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"contacto", component: ContactoComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"iniciarSesion", component: IniciarSesionComponent},
   {path:"preguntas", component: PreguntasComponent},
   {path:"", redirectTo:"/inicio", pathMatch:"full"},
   {path: "**", component:  NotFoundComponent}

];
