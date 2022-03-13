import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
<<<<<<< HEAD
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
=======
    path: 'customers', //http://host:port/app/customers
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    
  },
  {
    path: 'orders', //http://host:port/app/orders
>>>>>>> c2747ff (Angular 12 Upgrade)
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
