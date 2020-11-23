import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EuroPipe} from './pipes/euro.pipe';
import {registerLocaleData} from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import {LifecycleComponent} from './components/lifecycle/lifecycle.component';
import {HttpClientModule} from '@angular/common/http';
import { StartPaginaComponent } from './pages/start-pagina/start-pagina.component';
import { LifecycleExperimentPageComponent } from './pages/lifecycle-experiment-page/lifecycle-experiment-page.component';
import { PipeExperimentPaginaComponent } from './pages/pipe-experiment-pagina/pipe-experiment-pagina.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

registerLocaleData(localeNl, 'nl-NL');

@NgModule({
  declarations: [
    AppComponent,
    EuroPipe,
    LifecycleComponent,
    StartPaginaComponent,
    LifecycleExperimentPageComponent,
    PipeExperimentPaginaComponent,
    NotFoundPageComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
  providers: [{provide: LOCALE_ID, useValue: 'nl-NL'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
