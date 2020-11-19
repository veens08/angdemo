import {EuroPipe} from './euro.pipe';
import localeNl from '@angular/common/locales/nl';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeNl, 'nl-NL');

describe('EuroPipe test', () => {
  const pipe = new EuroPipe();
  const euroSignPlusNonBreakableSpace = '\u20AC\u00A0';

  xit('een geheel getal moet als zodanig worden afgebeeld voorafgaand met een euroteken', () => {
    // 3 A's  Arrange Act Assert

    const result = pipe.transform(123);
    expect(result).toBe(euroSignPlusNonBreakableSpace + '123');
  });
  it('een getal met 3 cijfers achter komma moet op 2 cijfers worden afgerond', () => {
    // 3 A's  Arrange Act Assert

    const result = pipe.transform(123.456);
    expect(result).toBe(euroSignPlusNonBreakableSpace + '123,46');
  });
  it(' als er niets(undefined wordt meegegeven dan moet er undefined terugkomen', () => {
    // 3 A's  Arrange Act Assert

    const result = pipe.transform(undefined);
    expect(result).toBeUndefined();
  });
  it(' als er null wordt meegegeven dan moet null worden terug gegeven', () => {
    // 3 A's  Arrange Act Assert

    const result = pipe.transform(null);
    expect(result).toBeNull();
  });
  it(' als het getal 0 wordt meegegeven dan moet 0 worden terug gegeven voorafgaand met euro teken', () => {
    // 3 A's  Arrange Act Assert

    const result = pipe.transform(0);
    expect(result).toBe(euroSignPlusNonBreakableSpace + '0');
  });
});
