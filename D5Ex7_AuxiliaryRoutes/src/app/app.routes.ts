import { Routes, RouterModule } from '@angular/router';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ComponentAux from './component-aux';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne },
  { path: 'component-two', component: ComponentTwo },
  { path: 'component-aux', component: ComponentAux, outlet: 'sidebar' },
  { path: 'component-aux2', component: ComponentAux, outlet: 'sidebar2' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);