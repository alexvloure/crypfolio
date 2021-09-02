import { interceptorProvider } from './interceptors/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TrendModule } from 'ngx-trend';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common'; 
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';
import { LottieModule } from 'ngx-lottie';
import { ChartModule } from 'angular-highcharts';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaMcComponent } from './components/home-components/lista-mc/lista-mc.component';
import { HomeComponent } from './pages/home/home.component';
import { PercentageChangePipe } from './pipes/percentage-change.pipe';
import { MoneyPipe } from './pipes/money.pipe';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { DetailsComponent } from './pages/details/details.component';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';
import { NumberEsPipe } from './pipes/number-es.pipe';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { FirstToUpperCasePipe } from './pipes/first-to-upper-case.pipe';
import { PercentagePipe } from './pipes/percentage.pipe';
import { FooterComponent } from './components/footer/footer.component';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaMcComponent,
    HomeComponent,
    PercentageChangePipe,
    MoneyPipe,
    ScrollToTopComponent,
    DetailsComponent,
    CoinDetailsComponent,
    NumberEsPipe,
    LoginSignupComponent,
    PortfolioComponent,
    PortfolioDetailsComponent,
    FirstToUpperCasePipe,
    PercentagePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TrendModule,
    FontAwesomeModule,
    CommonModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    ChartsModule,
    FormsModule,
    SafePipeModule,
    LottieModule.forRoot({ player: playerFactory }),
    ChartModule,
    AutocompleteLibModule,
    ClipboardModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
