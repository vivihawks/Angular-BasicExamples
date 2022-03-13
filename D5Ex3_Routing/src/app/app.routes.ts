import { Routes, RouterModule } from '@angular/router';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';

export const routes: Routes = [
  { path: 'component-a', component: ComponentOne },//http://host:port/app/component-a
  { path: 'component-b/:id', component: ComponentTwo },//http://host:port/app/component-b/123
  { path: '', redirectTo: 'component-a', pathMatch: 'full' },//http://host:port/app/
  { path: '**', redirectTo: 'component-a', pathMatch: 'full' } //http://host:port/app/asdfasdfasdf
];



// export const appRoutingProviders: any[] = [

// ];

export const routing = RouterModule.forRoot(routes);