import { Usuarios } from './../interfaces/login';
import { Injectable } from "@angular/core";
import { TOKEN_STORAGE } from "src/environments/environment";
import jwtDecode, * as jwt_decode from "jwt-decode";

// import { IClaims } from "../interfaces/iclaims";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor() {}

  get token() {
    return localStorage.getItem(TOKEN_STORAGE)!;
  }

  set token(token: string) {
    localStorage.setItem(TOKEN_STORAGE, token);
  }

  resetarToken() {
    localStorage.removeItem(TOKEN_STORAGE);
  }
}
