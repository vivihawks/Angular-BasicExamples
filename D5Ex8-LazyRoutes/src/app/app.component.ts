import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lazy loading feature modules';
<<<<<<< HEAD
=======
  ngAfterViewInit(){
		console.log("View Initialized")
	}
>>>>>>> c2747ff (Angular 12 Upgrade)
}
