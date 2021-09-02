import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(percentage : number): string {
    var numeral = require('numeral');
    var es = require('numeral/locales/es');
    numeral.locale('es');

    var string = numeral(percentage).format('0,0')+'%';

    return string;
  }

}
