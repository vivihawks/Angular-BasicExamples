import { Routes, RouterModule } from '@angular/router';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ActivateGuard from './activate-guard';
import DeactivateGuard from './deactivate-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne },
  {
    path: 'component-two',
<<<<<<< HEAD
    component: ComponentTwo,
    canActivate: [ActivateGuard],
=======
    canActivate: [ActivateGuard],
    component: ComponentTwo,
>>>>>>> c2747ff (Angular 12 Upgrade)
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'component-three',
    component: ComponentTwo
  }

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);