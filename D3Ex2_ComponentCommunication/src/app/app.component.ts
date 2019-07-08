import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
	selector: 'app-root',
	template: `
	<h3> ViewChildren </h3>
    <app-alert #first ok="Next" (close)="showAlert(1)">
      Step 1: Learn angular
    </app-alert>
    <app-alert ok="Next2" (close)="showAlert(2)">
      Step 2: Love angular
    </app-alert>
    <app-alert ok="Close" >
      Step 3: Build app
    </app-alert>
	  <button (click)="showAlert(0)">Show steps</button>

	  <h3> ContentChildren </h3>
	   <app-hello-list>
	    <app-hello name="World"></app-hello>
	    <app-hello name="Other World"></app-hello>
	    <app-hello #last name="Last World"></app-hello>
	  </app-hello-list>
  
    <app-hello-list>
	  </app-hello-list>

	  <app-hello-list>
	    Some Text Here
    </app-hello-list>
    <p>Calls function on child component classes to randomize color of them.</p>
	  `
})
export class AppComponent {
  @ViewChild('first') alert: AlertComponent;
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
   
  alertsArr = [];

  ngAfterViewInit() {
    this.alertsArr = this.alerts.toArray();
  }
  //1 = index 0
  //2 = index 1
  showAlert(step) {
    this.alertsArr[step].show(); // step 1 is alert index 0
  }
}
