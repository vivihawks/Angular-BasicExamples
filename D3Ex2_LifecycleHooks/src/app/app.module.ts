import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParentComponent } from './components/parent.component';
import { App } from './app';
import {ChildComponent} from './components/child.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ParentComponent,
    App
    , ChildComponent
   ],
  bootstrap: [ App ]
})
export class AppModule { 
}
