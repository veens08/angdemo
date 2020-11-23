import {Routes} from '@angular/router';
import {StartPaginaComponent} from './pages/start-pagina/start-pagina.component';
import {LifecycleComponent} from './components/lifecycle/lifecycle.component';
import {PipeExperimentPaginaComponent} from './pages/pipe-experiment-pagina/pipe-experiment-pagina.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {path: 'start', component: StartPaginaComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'pipe', component: PipeExperimentPaginaComponent},
  {path: 'not-found', component: NotFoundPageComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found'}
];
