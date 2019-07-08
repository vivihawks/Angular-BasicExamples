import { Component } from '@angular/core';

import { RedGreenBlue } from "./red-green-blue";

@Component({
    selector: 'app',
    template: `
        <color-value label="Red"   init-value="10"  (value)="color.red=$event"></color-value>
        <color-value label="Green" init-value="200" (value)="color.green=$event"></color-value>
        <color-value label="Blue"  init-value="140" (value)="color.blue=$event"></color-value>
        <color-box [rgb]="color"></color-box>`

})
export class AppComponent {
    private color: RedGreenBlue = new RedGreenBlue();
}