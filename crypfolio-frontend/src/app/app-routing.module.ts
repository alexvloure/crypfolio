import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService as guard } from './guards/guard.service';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: LoginSignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    pathMatch: 'full',
    canActivate: [guard], data: { expectedRol: ['admin','user']},
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
