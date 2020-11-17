import {EuroPipe} from './euro.pipe';
import localeNl from '@angular/common/locales/nl';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeNl, 'nl');

describe('EuroPipe test', () => {
  it('create an instance', () => {
    // 3 A's  Arrange Act Assert
    const pipe = new EuroPipe();
    const euroSign = '\u20AC';
    const result = pipe.transform(123);
    expect(result).toBe(euroSign + ' ' + '123');
  });
});
