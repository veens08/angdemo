import {EuroPipe} from './euro.pipe';
import localeNl from '@angular/common/locales/nl';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeNl, 'nl');

describe('EuroPipe test', () => {
  const pipe = new EuroPipe();
  const euroSignPlusNonBreakableSpace = '\u20AC\u00A0';

  it('een geheel getal moet als zodanig worden afgebeeld voorafgaand met een euroteken', () => {
    // 3 A's  Arrange Act Assert

    const result = pipe.transform(123);
    expect(result).toBe(euroSignPlusNonBreakableSpace + '123');
  });
  it('een getal met 3 cijfers achter komma moet op 2 cijfers worden afgerond', () => {
    // 3 A's  Arrange Act Assert

    const result = pipe.transform(123.456);
    expect(result).toBe(euroSignPlusNonBreakableSpace + '123,46');
  });
  it(' als er niets wordt meegegeven dan moet er ook niets terugkomen', () => {
    // 3 A's  Arrange Act Assert

    const result = pipe.transform(undefined);
    expect(result).toBeUndefined();
  });
});
