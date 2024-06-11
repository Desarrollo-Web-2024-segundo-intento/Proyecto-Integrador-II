import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
@Injectable({
  providedIn: 'root'
})

// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router =inject(Router)
//   if(authService.isAuth()){
//     return true;
//   }else{
//     router.navigateByUrl('/iniciarsesion')
//     return false;
//   }
// };

export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) {}

  canActivate(): boolean {
    if (this.apiService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/iniciarSesion']);
      return false;
    }
  }
}
