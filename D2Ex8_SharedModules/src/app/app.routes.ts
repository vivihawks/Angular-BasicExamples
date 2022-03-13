import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager.component';

const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', 
  // loadChildren: './lazy/lazy.module#LazyModule' 
  loadChildren: () => import('./lazy/lazy.module') .then(m=>m.LazyModule)
}
  
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule{}