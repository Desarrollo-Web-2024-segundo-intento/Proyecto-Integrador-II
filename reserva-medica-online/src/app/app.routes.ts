import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PoliticasComponent } from './shared/footer/politicas/politicas.component';
import { PreguntasComponent } from './shared/footer/preguntas/preguntas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { TerminosYCondicionesComponent } from './shared/footer/terminos-y-condiciones/terminos-y-condiciones.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { PagosComponent } from './pages/dashboard/pagos/pagos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PerfilComponent } from './pages/dashboard/usuario/perfil/perfil.component';
import { MisTurnosComponent } from './pages/dashboard/mis-turnos/mis-turnos.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
   {path:"inicio", component: InicioComponent},
   {path:"acercaDe", component: AcercaDeComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"contacto", component: ContactoComponent},
   {path:"servicios", component: ServiciosComponent},
   {path:"iniciarSesion", component: IniciarSesionComponent},
   {path:"turnos", component: TurnosComponent, canActivate: [AuthGuard]},
   {path:"preguntas", component: PreguntasComponent},
   {path:"terminos-y-condiciones", component: TerminosYCondicionesComponent},
   {path:"politicas", component: PoliticasComponent},
   {path:"dashboard", component: DashboardComponent, canActivate: [AuthGuard],
      children:[
        {path:'usuario/perfil', component: PerfilComponent},
        {path:'mis-turnos', component: MisTurnosComponent},
        {path:'pagos', component: PagosComponent},
      ]},
   {path:"carrito", component: CarritoComponent, canActivate: [AuthGuard]},
   {path: "registro", component: RegistroComponent},
   {path:"", redirectTo:"/inicio", pathMatch:"full"},
   {path: "**", component:  NotFoundComponent}


];
