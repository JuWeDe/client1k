
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = true;

  constructor() { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(): void {
  this.loggedIn = true;
  }

  logout(): void {
  this.loggedIn = false;
  }
}







// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private authUrl = 'https://localhost:5432'; //  IdentityServer URL
//   private loggedIn = new BehaviorSubject<boolean>(false);

//   constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) { }

//   login(username: string, password: string): Observable<boolean> {
//     const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
//     const body = new URLSearchParams();
    
//     body.set('client_id', 'your-client-id');
//     body.set('grant_type', 'password');
//     body.set('username', username);
//     body.set('password', password);
//     body.set('scope', 'openid profile api1');
    
//     return this.http.post(this.authUrl, body.toString(), { headers })
//       .pipe(
//         map((response: any) => {
//           if (response && response.access_token) {
//             localStorage.setItem('access_token', response.access_token);
//             this.loggedIn.next(true);
//             return true;
//           } else {
//             return false;
//           }
//         })
        
//       );
      
//   }
//   logout(): void {
//     localStorage.removeItem('access_token');
//     this.loggedIn.next(false);
//     this.router.navigate(['/login']);
//   }
//   isLoggedIn(): boolean {
//     const token = localStorage.getItem('access_token');
//     return !this.jwtHelper.isTokenExpired(token);
//   }
//   get isLoggedIn$(): Observable<boolean> {
//     return this.loggedIn.asObservable();
//   }

// }