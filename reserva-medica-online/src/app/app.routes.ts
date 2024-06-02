import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { TerminosYCondicionesComponent } from './pages/terminos-y-condiciones/terminos-y-condiciones.component';
import { PagosComponent } from './pages/dashboard/pagos/pagos.component';
import { EstadoPagosComponent } from './pages/dashboard/estado-pagos/estado-pagos.component';
import { HistorialPagosComponent } from './pages/dashboard/historial-pagos/historial-pagos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
// import { RegistroComponent } from './auth/registro/registro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PerfilComponent } from './pages/dashboard/usuario/perfil/perfil.component';
import { MisTurnosComponent } from './pages/dashboard/mis-turnos/mis-turnos.component';
// import { RegistroComponent } from './auth/registro/registro.component';

export const routes: Routes = [
   {path:"inicio", component: InicioComponent},
   {path:"acercaDe", component: AcercaDeComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"contacto", component: ContactoComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"iniciar-sesion", component: IniciarSesionComponent},
   // {path:"registro", component: RegistroComponent},
   {path:"turnos", component: TurnosComponent},
   {path:"preguntas", component: PreguntasComponent},
   {path: "terminos-y-condiciones", component: TerminosYCondicionesComponent},
   {path:"politicas", component: PoliticasComponent},
   {path:"dashboard", component: DashboardComponent,
      children:[
         {path:'usuario/perfil', component: PerfilComponent},
         {path:'mis-turnos', component: MisTurnosComponent},
         {path:'pagos', component: PagosComponent},
         {path:'estado', component:EstadoPagosComponent },
         {path:'historial', component: HistorialPagosComponent},
      ]},
      {path:"carrito", component: CarritoComponent},
   // {path: "registro", component: RegistroComponent},
   {path:"", redirectTo:"/inicio", pathMatch:"full"},
   {path: "**", component:  NotFoundComponent}


];
