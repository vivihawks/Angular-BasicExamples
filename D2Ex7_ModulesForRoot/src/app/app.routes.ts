<<<<<<< HEAD
import { ModuleWithProviders } from '@angular/core';
=======
import { ModuleWithProviders, NgModule } from '@angular/core';
>>>>>>> c2747ff (Angular 12 Upgrade)
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager.component';

const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
<<<<<<< HEAD
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
=======
  { path: 'lazy'
    , loadChildren: () => import('./lazy/lazy.module') .then(m=>m.LazyModule)
    // ,loadChildren: './lazy/lazy.module#LazyModule'
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule{}
>>>>>>> c2747ff (Angular 12 Upgrade)
