import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ObsCombined } from './combinedobservables';
import { App } from './app';

@NgModule({
  declarations: [
    App,
	ObsCombined
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
