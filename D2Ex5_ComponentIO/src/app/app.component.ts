import { Component, ViewChild } from '@angular/core';

import { RedGreenBlue } from "./red-green-blue";
import { ColorValueComponent } from "./color-value.component";

@Component({
    selector: 'app',
    template: `
        <color-value label="Red"   #first init-value="100"  (value)="color.red=$any($event)"></color-value>
        <color-value label="Green" init-value="200" (value)="color.green=$any($event)"></color-value>
        <color-value label="Blue"  init-value="140" (value)="color.blue=$any($event)"></color-value>
        <color-box [rgb]="color"></color-box>`

})
export class AppComponent {
     color: RedGreenBlue = new RedGreenBlue();
	
	//Subscribing programatically to an output
	@ViewChild("first")
	private redComp: ColorValueComponent = new ColorValueComponent();
	
	ngAfterViewInit(){
        
		console.log("View Initialized")
		this.redComp.colorValueEvent.subscribe((data)=>{console.log(this.color)})
	}
}