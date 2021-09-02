import { InfoMoneda } from './../models/info-moneda';
import { MonedaPortfolio } from './../models/moneda-portfolio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { MonedaRAW } from '../models/moneda-raw';

@Injectable({
  providedIn: 'root'
})
export class MonedaPortfolioService {

  url = 'http://localhost:8080/crud/';
  
  urlAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=';
  urlInfo = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids='

  constructor(private httpClient : HttpClient) { }

  public crear(monedaPortfolio: MonedaPortfolio): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', monedaPortfolio);
  }

  // public actualizar(monedaPortfolio: MonedaPortfolio): Observable<any> {
  //   return this.httpClient.post<any>(this.url + 'actualizar', monedaPortfolio);
  // }

  public getAll(): Observable<MonedaPortfolio[]> {
    return this.httpClient.get<MonedaPortfolio[]>(this.url + 'obtener');
  }

  //////////////////////////////////////////////////////////////////////////
  public getPortfolioInfo(resp : any){
    let monedas : string = '';
    for(var i = 0; i<resp.length; i++){
      if(i == 0){
        // let replaced = resp[i].moneda.replace(/ /g, "-");
        monedas += resp[i].idMoneda;
      } else {
        // let replaced = resp[i].moneda.replace(/ /g, "-");
        monedas += '%2C' + resp[i].idMoneda;
      }
    }
    if(!monedas.includes('bitcoin')){
      monedas += '%2Cbitcoin';
    }
    return this.httpClient.get<any>(this.urlInfo + monedas + '&order=market_cap_desc&per_page=150&page=1&sparkline=false');
  }

  public getInfoMonedas(){
    return this.httpClient.get<InfoMoneda[]>(this.url + 'obtenerNombres');
  }

  public deleteMoneda(monedaPortfolio: MonedaPortfolio): Observable<any> {
    return this.httpClient.post<any>(this.url + "delete", monedaPortfolio);
  }
}
