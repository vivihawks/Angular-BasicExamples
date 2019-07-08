import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponent } from './components/my.component';
import { App } from './app';
import {LifecycleChildComponent} from './components/lch-child.component';
import {LifecycleParentComponent} from './components/lch-parent.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    MyComponent,
    App,
    LifecycleParentComponent,
    LifecycleChildComponent
   ],
  bootstrap: [ App ]
})
export class AppModule { 
}
