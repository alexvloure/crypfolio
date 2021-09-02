import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  userRol!: string;

  constructor(
    private tokenService : TokenService,
    private router : Router
  ) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = router.data.expectedRol;
    const roles = this.tokenService.getAuthorities();
    this.userRol = 'user';
    roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.userRol = 'admin';
      }
    });
    if(!this.tokenService.getToken() || expectedRol.indexOf(this.userRol) === -1){
      this.router.navigate([""]);
      return false
    }
    return true;
  }
}
