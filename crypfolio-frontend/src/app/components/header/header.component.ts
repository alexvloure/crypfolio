import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openMenu', [
      state(
        'open',
        style({
          opacity: 1,
          backgroundColor: '#faf7f0',
        })
      ),
      state(
        'closed',
        style({
          right: '-1000px',
          opacity: 0,
          backgroundColor: 'black',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  isLoggedIn : boolean = false;
  authTimer = timer(0,2000);
  hamburger = faBars;

  constructor( private tokenService: TokenService, private router: Router) {
    const helper = new JwtHelperService();
    this.authTimer.subscribe(() => {
      if(helper.isTokenExpired(this.tokenService.getToken())){
        this.isLoggedIn = false;
      }
    })
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLoggedIn = true;
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  logOut() {
    this.isLoggedIn = false;
    this.tokenService.logOut();
    this.router.navigate(["/auth"]);
  }
}
