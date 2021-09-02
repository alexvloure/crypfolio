import { JwtDTO } from './../models/jwt-dto';
import { LoginUsuario } from './../models/login-usuario';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from './../models/nuevo-usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient : HttpClient) { }

  public crear(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'crear', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<any>(this.authURL + 'login', loginUsuario);
  }
}
