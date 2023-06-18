// import { LoginService } from './login.service';
import jwtDec, * as jwtDecode from 'jwt-decode';
import { Credentials, UsuarioLogin, Usuarios } from './../interfaces/login';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { TokenService } from "./token.service";
import { environment, TOKEN_STORAGE } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
    
    private userSubject: BehaviorSubject<UsuarioLogin | null>;
    public user: Observable<UsuarioLogin | null>;

    private usuario : UsuarioLogin = {} as UsuarioLogin;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  login(login: Credentials) {
    const url = `${environment.apiUrl}api/v1/auth/login`;
    return this.http.post<UsuarioLogin>(url, login).pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.usuario = user;
        let teste =JSON.stringify(this.usuario);
        let token = user.token.toString();
        localStorage.setItem('user', teste);
        this.userSubject.next(user);
        return user; 
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  public get userValue() {
    return this.userSubject.value;
  }

  // verificarAdministrador() : boolean 
  // {
  //   const permissoes = this.userSubject.value?.usuario.map(x => x.permissao);
  //   if(permissoes?.includes('Administrador')) {
  //     return true;
  //   }  else {
  //     return false;
  //   }

  // }

}
