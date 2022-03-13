import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';


const routes: Routes = [
  {
<<<<<<< HEAD
    path: '',
=======
    path: '', //http://host:port/app/customers/
>>>>>>> c2747ff (Angular 12 Upgrade)
    component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
