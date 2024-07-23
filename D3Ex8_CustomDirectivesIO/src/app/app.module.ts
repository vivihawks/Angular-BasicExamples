import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HostComponent } from "./host.component";
import { AttributeDirective } from "./attribute.directive";
import { ClickerDirective } from "./clicker.directive";

@NgModule({
    imports:      [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        HostComponent,
        AttributeDirective,
        ClickerDirective
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }