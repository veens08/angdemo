import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EuroPipe} from './pipes/euro.pipe';
import {registerLocaleData} from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import {LifecycleComponent} from './components/lifecycle/lifecycle.component';
import {HttpClientModule} from '@angular/common/http';

registerLocaleData(localeNl, 'nl-NL');

@NgModule({
  declarations: [
    AppComponent,
    EuroPipe,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'nl-NL'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
