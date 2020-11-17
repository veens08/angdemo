import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyPipe} from '@angular/common';


@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value && value !== 0) {
      return value;
    }
    const currencyPipe = new CurrencyPipe('nl', 'EUR');
    return currencyPipe.transform(value).replace(',00', '');
  }

  /*
  List of falsy values
    falsies
      undefined
      null
      ''"" ``
      0
      NaN
   */
}
