import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class RegistroService {
  //url = "https://reqres.in/api/register"
  url="https://reqres.in/api/users/1"
  //url="localhost:8000/admin/auth/user/"
  //url="http://127.0.0.1:8000/api/v1/paciente/";
  //url="http://127.0.0.1:8000/admin/auth/user/";

  constructor(private http:HttpClient) {
    console.log("El servicio usuario está corriendo");
  }
  createUser(user:User):Observable<User>{
    return this.http.post<User>(this.url, user)
  }
}

