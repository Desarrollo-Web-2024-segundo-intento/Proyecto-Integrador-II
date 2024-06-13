import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    //private apiUrl = 'http://192.168.0.170:8000';
    //  private apiUrl = 'http://localhost:8000/';
     private apiUrl = 'http://127.0.0.1:8000';
    // private apiUrl = 'http://mgalarmasserver1.ddns.net:8000/';
     //private apiUrl = 'http://casaiot.ddns.net:8000/';

    constructor(private http: HttpClient) { }

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
}

// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable, throwError } from "rxjs";
// import { catchError, map } from 'rxjs/operators';
// @Injectable({
//     providedIn: 'root'
// })
// export class ApiService {
//     //private apiUrl = 'http://192.168.0.170:8000';
//      private apiUrl = 'http://127.0.0.1:8000/';
//     // private apiUrl = 'http://mgalarmasserver1.ddns.net:8000/';
//      //private apiUrl = 'http://casaiot.ddns.net:8000/';

//     constructor(private http: HttpClient) { }

//     register(user: any):
//         Observable<any> {
//         return this.http.post<any>(this.apiUrl + '/register/', user);
//     }
//     login(dni: string, password: string): Observable<any> {
//         const body = { username: dni, password: password };
//         return this.http.post<any>(this.apiUrl + '/login/', body).pipe(
//           //console.log();
//           map((response: any) => {
//             //console.log('ACA ESTA EL NOMBRE DE USUARIO');
//             //console.log(access_token);
//             localStorage.setItem('access_token', response.access);
//             localStorage.setItem('refresh_token', response.refresh);
//             localStorage.setItem('username', response.refresh);
//             console.log('ACA ESTA EL NOMBRE DE USUARIO');
//             let cliente = localStorage.getItem(response.access);
//             console.log(cliente);
//             return response;
//           }),
//         );
//     }
//     logout(): void {
//       localStorage.removeItem('access_token');
//       localStorage.removeItem('refresh_token');
//     }
//     isLoggedIn(): boolean {
//       return !!localStorage.getItem('access_token'); // Devuelve true si el token existe
//     }
//     // especialidades(dni: string, password: string): Observable<any> {
//     //     const body = { username: dni, password: password };
//     //     return this.http.post<any>(this.apiUrl + '/login/', body);
//     // }

// }
