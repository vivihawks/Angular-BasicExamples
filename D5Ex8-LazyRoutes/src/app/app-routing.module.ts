import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [
  {
    path: 'customers', //http://host:port/app/customers
    // component: CustomersComponent, ::: Eager Load
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) // ::: Lazy Load
    
  },
  {
    path: 'orders', //http://host:port/app/orders
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
