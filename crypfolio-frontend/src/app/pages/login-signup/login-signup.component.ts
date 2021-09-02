import { NuevoUsuario } from './../../models/nuevo-usuario';
import { LoginUsuario } from './../../models/login-usuario';
import { AuthService } from './../../services/auth.service';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'],
  animations: [
    trigger('formState', [
      state('hide', style({
        opacity: 0,
        display: 'none',
      })),
      state('show', style({
        opacity: 1,
        display: 'block',
      })),
      transition('show <=> hide', animate(0))
    ])
  ],
})
export class LoginSignupComponent implements OnInit{
  state = 'login';

  //LOGIN
  loginUsuario!: LoginUsuario;
  nombreUsuarioL!: string;
  passwordL!: string;
  roles: string[] = [];
  errMsgL!: string;
  isLogginFail = false;

  //REGISTER
  nuevoUsuario!: NuevoUsuario;
  nombreUsuarioR!: string;
  nombre!: string;
  email!: string;
  passwordR!: string;
  rolesR: string[] = [];
  errMsgR!: string;
  isRegistered = false;
  isRegisterFail = false;
  timeLeft: number = 5;
  interval: any;

  //LOTTIE
  options: AnimationOptions = {
    path: "assets/lottieAnimations/lottie-check2.json",
    loop: false,
  };

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.router.navigate([""]);
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuarioL, this.passwordL);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
      },
      err => {
        this.isLogginFail = true;
        this.errMsgL = err.error.mensaje;
      }
    );
  }

  onRegister(): void {
    this.nombreUsuarioL = '';
    this.passwordL = '';
    this.isLogginFail = false;
    if(this.nombreUsuarioR == "admin"){
      this.rolesR.push("admin");
    }
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuarioR, this.email, this.passwordR, this.rolesR);
    this.authService.crear(this.nuevoUsuario).subscribe(
      () => {
        this.isRegistered = true;
        this.startTimer();
        setTimeout(() => {
          this.state = 'login';
          this.isRegistered = false;
          this.timeLeft = 5;
          clearInterval(this.interval);
        }, 5000);
        this.nombre = '';
        this.nombreUsuarioR = '';
        this.email = '';
        this.passwordR = '';
        this.rolesR = [];
      },
      err => {
        this.errMsgR = err.error.mensaje;
        this.isRegisterFail = true;
        this.rolesR = [];
      }
    );
  }

  toggle() {
    this.state = this.state == 'login' ? 'register' : 'login';
  }

  get loginState() {
    return this.state == 'login'?'show':'hide';
  }

  get registerState() {
    return this.state == 'register'?'show':'hide';
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
    },1000)
  }
}
