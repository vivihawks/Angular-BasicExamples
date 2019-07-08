import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert.component';
import { HelloComponent } from './hello.component';
import { HelloListComponent } from './hello-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
	HelloComponent,
	HelloListComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
