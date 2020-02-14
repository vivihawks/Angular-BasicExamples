import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/concat';

@Component({
  selector: 'app-root',
  template: `
    <p>Total price of product is {{fetchPrice|async  | currency:"CAD":true:"1.2-2"}}</p>
    <p>Seconds: {{seconds|async}} </p>
    <br><br><br>
   <div>
      This web page has {{ pageViews | animateNumber }} views!
      
    </div>
  `
})
export class AppComponent {
  fetchPrice = new Promise((resolve, reject) => {
    let price =100;
    setInterval(() => resolve(price++), 1000);
  });

  seconds = Observable.of("a").concat(Observable.interval(100));
//seconds.subscribe(progress,error, success);
  pageViews = 100;

  constructor() {
    // simulate polling every 5 seconds
    setInterval(() => {
      this.pageViews += Math.round(Math.random() * 10);
    }, 3000);
  }
}
