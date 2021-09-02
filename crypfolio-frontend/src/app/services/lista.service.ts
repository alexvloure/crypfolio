import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  _url : string = "https://api.coingecko.com/api/v3/coins/markets";

  constructor(private http:HttpClient) { }

  getLista(page: any, currency: any){
    let header = new HttpHeaders().set('Type-content', 'application/json')

    return this.http.get(this._url + `?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=true`, {
      headers: header
    })
  }
}
