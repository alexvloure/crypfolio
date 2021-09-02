import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberEs'
})
export class NumberEsPipe implements PipeTransform {

  transform(n : number): unknown {
    var numeral = require('numeral');
    var es = require('numeral/locales/es');
    numeral.locale('es');

    var string = numeral(n).format('0,0');
    return string;
  }

}
