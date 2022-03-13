<<<<<<< HEAD
import { ModuleWithProviders } from '@angular/core';
=======
import { ModuleWithProviders, NgModule } from '@angular/core';
>>>>>>> c2747ff (Angular 12 Upgrade)
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';

const routes: Routes = [
  { path: '', component: LazyComponent }
];

<<<<<<< HEAD
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
=======
// export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)]
  // exports: [RouterModule]
})
export class LazyRoutesModule { }
>>>>>>> c2747ff (Angular 12 Upgrade)
