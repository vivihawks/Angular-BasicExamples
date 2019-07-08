import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";
import { routing } from "./app.routes";
import { RedComponentList } from "./red/red.component-list";
import { GreenComponentList } from "./green/green.component-list";
import { BlueComponentList } from "./blue/blue.component-list";

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        ...RedComponentList,
        ...GreenComponentList,
        ...BlueComponentList
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]
})
export class AppModule { }