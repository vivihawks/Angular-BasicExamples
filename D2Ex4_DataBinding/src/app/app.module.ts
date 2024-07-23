import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  provideHttpClient } from '@angular/common/http';
import { BindingComponent } from './binding.component';
import { AppComponent } from './app.component';
import { FeatureModule1Module } from './feature-module1/feature-module1.module';
import { FeatureModule2Module } from './feature-module2/feature-module2.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FeatureModule1Module,
    FeatureModule2Module //This import is only good for components in this module
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }


//Angular App > Angular Modules > Angular Components