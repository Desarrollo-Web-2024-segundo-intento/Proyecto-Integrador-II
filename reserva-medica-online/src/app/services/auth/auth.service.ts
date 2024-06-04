import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "../../models/user"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://192.168.0.170:8000'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) {}

  createUser(user:User):Observable<any>
    {
    return this.http.post(this.apiUrl, user)
    }

  // login(dni: string, password: string): Observable<any> {
  //   const url = `${this.apiUrl}/login/`;
  //   const body = { username: dni, password: password };
  //   return this.http.post(url, body);
  // }

  // register(data: any): Observable<any> {
  //   const url = `${this.apiUrl}/register/`;
  //   return this.http.post(url, data);
  // }

  // logout(): Observable<any> {
  //   const url = `${this.apiUrl}/logout/`;
  //   return this.http.post(url, {});
  // }

  // Agrega otros métodos según las necesidades de tu aplicación
}
