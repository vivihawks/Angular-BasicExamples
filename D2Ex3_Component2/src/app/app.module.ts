import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlockCounterComponent }   from './block-counter.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ BlockCounterComponent ],
    bootstrap:    [ BlockCounterComponent ]
})
export class AppModule { }