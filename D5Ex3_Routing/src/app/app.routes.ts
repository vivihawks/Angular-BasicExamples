import { Routes, RouterModule } from '@angular/router';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';

export const routes: Routes = [
  { path: 'component-a', component: ComponentOne },
  { path: 'component-b/:id', component: ComponentTwo },
  { path: '', redirectTo: 'component-a', pathMatch: 'full' }
];

//http://localhost:port/app/component-b/123

// export const appRoutingProviders: any[] = [

// ];

export const routing = RouterModule.forRoot(routes);