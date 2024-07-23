import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { EagerComponent } from './eager.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, SharedModule.forRoot(), AppRoutingModule ],
  declarations: [ AppComponent, EagerComponent ],
  bootstrap:    [ AppComponent ],
  providers : []
    //providers: [ CounterService ]
})
export class AppModule { }
