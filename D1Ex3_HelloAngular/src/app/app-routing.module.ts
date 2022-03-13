import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes)],
=======
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
>>>>>>> c2747ff (Angular 12 Upgrade)
  exports: [RouterModule]
})
export class AppRoutingModule { }
