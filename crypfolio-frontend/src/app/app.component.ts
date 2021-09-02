import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypfolio';
  authTimer = timer(0,2000);

  constructor(private token : TokenService, private router : Router){
    const helper = new JwtHelperService();
    this.authTimer.subscribe(() => {
      if(helper.isTokenExpired(this.token.getToken())){
        this.token.logOut();
        if(this.router.url === '/portfolio')
          this.router.navigate([""]);
      }
    })
  }
 
}
