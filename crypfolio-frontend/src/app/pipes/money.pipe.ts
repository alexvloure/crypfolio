import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(price: number, currency: string): string {
    var numeral = require('numeral');
    var es = require('numeral/locales/es');
    numeral.locale('es');

    var value: string = "";
    
    if(Math.abs(price) > 999){
      var string = numeral(price).format('0,0');
    }else if(Math.abs(price) <= 999 && Math.abs(price) >= 0.01){
      var string = numeral(price).format('0,0.00');
    }else {
      var string = numeral(price).format('0,0.00000000')
    }
    

    if(currency == 'USD'){
      value = string+"$";
    }else if(currency == 'EUR'){
      value = string+"€";
    }else if(currency == 'GBP'){
      value = string+"£";
    }

    // 

    // if(price > 9999){
    //   price.toFixed(0);
    // }

    // price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return value;
  }

}
