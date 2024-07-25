import { Routes, RouterModule } from '@angular/router';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ComponentAux from './component-aux';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne },
  { path: 'component-two', component: ComponentTwo },
  //The below urls can only be triggered with an outlet that matches the below config
  //component-aux can only be triggered if the outlet was sidebar
  //component-aux2 can only be triggered if the outlet was sidebar2
  { path: 'component-aux', component: ComponentAux, outlet: 'sidebar' },
  { path: 'component-aux2', component: ComponentAux, outlet: 'sidebar2' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);