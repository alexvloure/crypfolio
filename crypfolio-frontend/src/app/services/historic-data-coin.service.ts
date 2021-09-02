import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoricDataCoinService {
  _url : string = "https://api.coingecko.com/api/v3/coins/";

  constructor(private http:HttpClient) { }

  getCoinHistoricData(coin : any){
    let header = new HttpHeaders().set('Type-content', 'application/json')

    return this.http.get(this._url + `${coin}/market_chart?vs_currency=eur&days=120`, {
      headers: header
    })
  }
}
