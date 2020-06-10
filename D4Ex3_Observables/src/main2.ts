import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app/app';
import { ObsCombined } from './app/combinedobservables';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [HttpModule,BrowserModule],
  declarations: [
    App,
    ObsCombined
   ],
  bootstrap: [ App ]
})
export class AppModule { 
}

platformBrowserDynamic().bootstrapModule(AppModule);
