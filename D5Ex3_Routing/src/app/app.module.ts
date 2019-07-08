import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing/*, appRoutingProviders*/ } from './app.routes';

import { AppComponent } from './app.component';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    ComponentOne,
    ComponentTwo
  ],
  providers: [
    //appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

