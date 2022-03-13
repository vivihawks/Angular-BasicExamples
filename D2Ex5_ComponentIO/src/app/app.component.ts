<<<<<<< HEAD
import { Component } from '@angular/core';

import { RedGreenBlue } from "./red-green-blue";
=======
import { Component, ViewChild } from '@angular/core';

import { RedGreenBlue } from "./red-green-blue";
import { ColorValueComponent } from "./color-value.component";
>>>>>>> c2747ff (Angular 12 Upgrade)

@Component({
    selector: 'app',
    template: `
<<<<<<< HEAD
        <color-value label="Red"   init-value="10"  (value)="color.red=$event"></color-value>
=======
         <color-value label="Red"   #first init-value="10"  (value)="color.red=$event"></color-value>
>>>>>>> c2747ff (Angular 12 Upgrade)
        <color-value label="Green" init-value="200" (value)="color.green=$event"></color-value>
        <color-value label="Blue"  init-value="140" (value)="color.blue=$event"></color-value>
        <color-box [rgb]="color"></color-box>`

})
export class AppComponent {
<<<<<<< HEAD
    private color: RedGreenBlue = new RedGreenBlue();
=======
     color: RedGreenBlue = new RedGreenBlue();
	
	//Subscribing programatically to an output
	@ViewChild("first")
	private redComp: ColorValueComponent;
	
	ngAfterViewInit(){
		console.log("View Initialized")
		this.redComp.colorValueEvent.subscribe((data)=>{console.log(this.color)})
	}
>>>>>>> c2747ff (Angular 12 Upgrade)
}