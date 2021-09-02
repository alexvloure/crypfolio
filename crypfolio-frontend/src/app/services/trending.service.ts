import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  _url : string = "https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1";

  constructor(private http:HttpClient) { }

  getTrending(){
    let header = new HttpHeaders().set('Type-content', 'application/json')

    return this.http.get(this._url, {
      headers: header
    })
  }
}
