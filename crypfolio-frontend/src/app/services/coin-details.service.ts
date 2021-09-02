import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinDetailsService {
  _url : string = "https://api.coingecko.com/api/v3/coins/";

  constructor(private http:HttpClient) { }

  getCoinDetails(coin : any){
    let header = new HttpHeaders().set('Type-content', 'application/json')

    return this.http.get(this._url + `${coin}?localization=false&tickers=false&community_data=false&developer_data=false`, {
      headers: header
    })
  }
}
