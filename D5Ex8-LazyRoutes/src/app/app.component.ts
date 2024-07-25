import { Component } from '@angular/core';
import { MyTestService } from './my-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lazy loading feature modules';
  constructor(protected myService:MyTestService){
    
  }
  ngAfterViewInit(){
		console.log("View Initialized")
	}
}
