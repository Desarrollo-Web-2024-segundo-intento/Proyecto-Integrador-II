import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
//import { catchError, map } from 'rxjs/operators';
import { TurnosComponent } from "../pages/turnos/turnos.component";
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'http://192.168.0.30:8000';
    //  private apiUrl = 'http://localhost:8000/';
     //private apiUrl = 'http://127.0.0.1:8000';
    // private apiUrl = 'http://mgalarmasserver1.ddns.net:8000/';
     //private apiUrl = 'http://casaiot.ddns.net:8000/';

    constructor(private http: HttpClient ) { }

    register(user: any):
        Observable<any> {
        return this.http.post<any>(this.apiUrl + '/register/', user);
    }

    login(dni: string, password: string): Observable<any> {
        const body = { username: dni, password: password };
        return this.http.post<any>(this.apiUrl + '/login/', body).pipe(
        );
    }

    logout(): void {
      let dni_cliente = localStorage.getItem('dni');
      let token_cliente = localStorage.getItem('token');
      let body2 = { username: dni_cliente, token: token_cliente };
      if (token_cliente) {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Token ${token_cliente}`});
          this.http.post<any>(`${this.apiUrl}/logout/`, body2, { headers }).subscribe(
          response => {
            console.log(response);
          localStorage.removeItem('token');
          localStorage.removeItem('dni');
          localStorage.removeItem('nombre');
          localStorage.removeItem('apellido');
          localStorage.removeItem('email');

          const inputUsuario = document.getElementById('input_usuario') as HTMLInputElement;
          if (inputUsuario) {
            inputUsuario.value = "";
            inputUsuario.style.display = 'none';
          }

          },
          error => {
            console.error('Error en el logout', error);
          }
        );
      } else {
        console.error('Token no encontrado en localStorage');
      }
    }

    isLoggedIn(): boolean {
      return !!localStorage.getItem('token'); // Devuelve true si el token existe
    }

    //traer profesionales segun especialidad seleccionada
    getUserData(): Observable<any> {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      });
      return this.http.get<any>(`${this.apiUrl}/user/`, { headers });
    }


    profile(): void {
      let dni_cliente = localStorage.getItem('dni');
      let token_cliente = localStorage.getItem('token');
      let body2 = { username: dni_cliente, token: token_cliente };
      if (token_cliente) {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Token ${token_cliente}`});
          this.http.post<any>(`${this.apiUrl}/profile/`, body2, { headers }).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.error('Error de profile', error);
          }
        );
      } else {
        console.error('Token no encontrado en localStorage');
      }
    }

    nuevo_turno(): void {
      let dni_cliente = localStorage.getItem('dni');
      let token_cliente = localStorage.getItem('token');
      let body = localStorage.getItem('datos_turno');
      if (token_cliente) {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Token ${token_cliente}`});
          this.http.post<any>(`${this.apiUrl}/nuevo_turno/`, body , { headers }).subscribe(

            response => { 
            console.log(response);
            alert('Turno agendado con exito');
            },
          error => {
            console.error('Error en el logout', error);
          }
        );
      } else {
        console.error('Token no encontrado en localStorage');
      }
    }

    lista_turnos_usuario(username: string): Observable<any> {
      const token_cliente = localStorage.getItem('token');
      if (token_cliente) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Token ${token_cliente}`
        });
        return this.http.get<any>(`${this.apiUrl}/lista_turnos_usuario/?username=${username}`, { headers });
      } else {
        console.error('Token no encontrado en localStorage');
        return new Observable(); // Retornar observable vacío en caso de error
      }
    }





}
