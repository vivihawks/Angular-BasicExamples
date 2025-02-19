import { Routes } from '@angular/router';
import { BasicSignalComponent } from './basic-signal/basic-signal.component';
import { DataArraySignalComponent } from './data-array-signal/data-array-signal.component';
import { LoaderSignalComponent } from './loader-signal/loader-signal.component';
import { ReactivePrgmSignalComponent } from './reactive-prgm-signal/reactive-prgm-signal.component';
import { ShoppingCartSignalComponent } from './shopping-cart-signal/shopping-cart-signal.component';
export const routes: Routes = [
    {path:'basic-signal', component: BasicSignalComponent},
    {path:'data-array-signal', component: DataArraySignalComponent},
    {path:'loader-signal', component: LoaderSignalComponent},
    {path:'reactive-prgm-signal', component: ReactivePrgmSignalComponent},
    {path:'shopping-cart-signal', component: ShoppingCartSignalComponent}
];
