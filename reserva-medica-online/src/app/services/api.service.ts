import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'http://192.168.0.170:8000';
    constructor(private http: HttpClient) { }

    register(user: any):
        Observable<any> {
        return this.http.post<any>(this.apiUrl + '/register/', user);
    }
    login(dni: string, password: string): Observable<any> {
        const body = { username: dni, password: password };
        return this.http.post<any>(this.apiUrl + '/login/', body);
    }

}
