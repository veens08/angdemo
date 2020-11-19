import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EuroPipe} from './pipes/euro.pipe';
import {registerLocaleData} from '@angular/common';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeNl, 'nl-NL');

@NgModule({
  declarations: [
    AppComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'nl-NL'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
