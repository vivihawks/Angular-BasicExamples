import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyComponent } from './app/my.component';
import { AppComponent } from './app/app.component';
import { AttributesService } from './app/attributes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    MyComponent,
    AppComponent
   ],
  providers: [AttributesService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
