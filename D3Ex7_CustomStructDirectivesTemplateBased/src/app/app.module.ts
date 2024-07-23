import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }   from './app.component';
import { NgIfComponent } from "./ng-if.component";
import { NgSwitchComponent } from "./ng-switch.component";
import { NgForComponent } from "./ng-for.component";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NgIfComponent,
        NgSwitchComponent,
        NgForComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }