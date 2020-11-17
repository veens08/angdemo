import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyPipe} from '@angular/common';


@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const currencyPipe = new CurrencyPipe('nl', 'EUR');
    return currencyPipe.transform(value).replace(',00', '');
  }
}
