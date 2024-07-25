import { Component } from '@angular/core';
import * as Rx from 'rxjs';
import { from, of , interval} from "rxjs";
import { map, catchError,delay, timeout,concat} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  template: `

    <p>Simple Pipes in action --> {{dummyText | uppercase  }}</p>
    <p>Simple Pipes in action --> {{price | currency : "EUR" :  true }}</p>
  
  
    <p>Total price of product is {{fetchPrice | async }}</p>
	<div  test='|currency:"CAD":true:"1.2"'>
	</div>
    <p>Seconds: {{seconds|async}} </p>
    <br><br><br>
   <div>
      This web page has {{ pageViews | animateNumber }} views!
      
    </div>
  `
})
export class AppComponent {
  dummyText : string = "This is  a dummy text";
  price : number = 100000;
  fetchPrice = new Promise((resolve, reject) => {
    let price =100;
    setInterval(() => resolve(price++), 1000);
  })
  //The below line or the async pipe, to read data from fetchPrice
  //.then((data)=> this.fetchPrice = data );

  seconds = of(0).pipe(Rx.concatWith(interval(1000)));//.subscribe(()=>{});
  pageViews = 100;

  constructor() {
    // simulate polling every 5 seconds
    setInterval(() => {
      this.pageViews += Math.round(Math.random() * 10);
    }, 3000);
  }
}
