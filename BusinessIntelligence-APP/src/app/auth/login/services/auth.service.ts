// import { LoginService } from './login.service';
import jwtDec, * as jwtDecode from 'jwt-decode';
import { Credentials, Message, UsuarioLogin, Usuarios, VendedoraLogin } from './../interfaces/login';
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
    private vendedoraSubject: BehaviorSubject<VendedoraLogin | null>;
    public user: Observable<UsuarioLogin | null>;

    private usuario : UsuarioLogin = {} as UsuarioLogin;
    private vendedora: VendedoraLogin = {} as VendedoraLogin;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.vendedoraSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  loginUsuario(login: Credentials) {
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

  loginVendedora(login: Credentials) {
    const url = `${environment.apiUrl}api/v1/auth/login`;
    return this.http.post<VendedoraLogin>(url, login).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.vendedora = user;
      let teste =JSON.stringify(this.vendedora);
      let token = user.token.toString();
      localStorage.setItem('user', teste);
      this.vendedoraSubject.next(user);
      return user; 
    }));
  }

  esqueciSenha(email: string)
  {
    const url = `${environment.apiUrl}api/v1/auth/esqueci-senha?email=${email}`;
    return this.http.post<Message>(url, email);
  }

  verificarCodigo(codigo: number)
  {
    const url = `${environment.apiUrl}api/v1/auth/verificar-codigo?codigo=${codigo}`;
    return this.http.post<Message>(url, codigo);
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

  public get vendedoraUserValue() {
    return this.vendedoraSubject.value;
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
