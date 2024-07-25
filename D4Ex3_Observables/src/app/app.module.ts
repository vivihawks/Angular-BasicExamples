import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { ObsCombined } from './combinedobservables';
import { App } from './app';

@NgModule({
  declarations: [
    App,
	ObsCombined
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [App]
})
export class AppModule { }
