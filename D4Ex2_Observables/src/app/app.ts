import { Component , ElementRef, ChangeDetectorRef, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app',
  template: `
        <div layout-margin layout layout-align="center">
          <h1>Angular Observables</h1>
        </div>

    <div class="rendered" flex layout>
    
    <h4 >Ex 1 : Basic Observable</h4>
    <h6 style="margin-bottom: 0">VALUES:</h6>
      <div *ngFor="let value of values">{{ value }}</div>

      <h6 style="margin-bottom: 0">ERRORs:</h6>
      <div>Errors: {{anyErrors}}</div>

      <h6 style="margin-bottom: 0">FINISHED:</h6>
      <div>Finished: {{ finished }}</div>

      <button style="margin-top: 2rem;" (click)="init()">Init</button>
    
    <h4 >Ex 2 : Observable Map</h4>
      <ul>
        
        <li *ngFor="let item of items">
          <div >
            <h3>{{item.price}}</h3>
          </div>
        </li>
      </ul>
    </div>
<br><br><br> <h4>Ex 3 : Error Handling in Observables </h4>
          <div >
            <h3>NEXT: {{nextMessage}}</h3>
            <h3>ERROR: {{errorMessage}}</h3>
            <h3>COMPLETED: {{completedMessage}}</h3>
          </div>

<br><br><br> <h4>Ex 4 : Observable from Events</h4>
<ul>
        <li  *ngFor="let coordinate of coordinates">
          <div >
            <p>x: {{coordinate.x}} y: {{coordinate.y}}</p>
          </div>
        </li>
</ul>
  <br><br><br> <h4>Ex 5 : Observables Combined</h4>
  Refer Console Log
<obs-combined></obs-combined> 
  <br><br><br> <h4>Ex 6 : Observables Combined 2</h4>
  Refer Console Log

   `,
   styles:[`h4{font-weight:bold; color: darkgreen; text-decoration: underline;}`]
})

export class App implements OnInit{
  //For Example 1
  private data: Observable<number>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  
  //For Example 2
  items: {}[] = [];

  //For Example 3 
  nextMessage: string;
  errorMessage: string;
  completedMessage: string;
  
  //For Example 4 
  coordinates: Array<{ x: number, y: number }> = [];
  
  
  init(){
    //Example 1 : Basic Observable
     this.data = new Observable<number>((observer:any) => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);

          setTimeout(() => {
              observer.next(43); 
          }, 2000);

          setTimeout(() => {
               observer.next(44);
              }, 3000);
              
          setTimeout(() => {
               observer.next(45);
              }, 4000);

          setTimeout(() => {
              observer.error();
              //observer.complete();
          }, 5000);
      });

      let subscription = this.data.subscribe(
          //function(abc){this.values.push(abc)},
         value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );
    
       let subscription2 = this.data.subscribe(
          //function(value){this.values.push(value)},
          value => this.values.push(333)
      );
    
  }
  
  constructor(
    private elementRef: ElementRef,
    private detectorRef: ChangeDetectorRef
  ) {
    
    //Example 2 : Observable Map
    Observable
      .from([{price: 1}, {price: 2}, {price: 3}, {price: 4}, {price: 5}])
      //Maps A, B below do the same thing. Different ways to do the same task
      //Map A
     //.map(item => {
     // 	return Object.assign({}, item, {price: item.price * 2});
     // })
      //Map B
      .map(item => {
        	return {price:item.price*2};
      })
       
      .subscribe(item => this.items.unshift(item));
    
    //Example 3 : Observable Error Handling
    var source = Rx.Observable
        .of("42","43","45","Last Number")
        // This will complete in 5 seconds
        .delay(5000)
        // We will override this to throw an error in 1 second
        .timeout(1000)
        // Uncomment this to catch the error and continue the stream
        .catch(() => Rx.Observable.of('Recovering!'));
 
     var subscription = source.subscribe(
        x => this.nextMessage = x, // onNext handler
        err => this.errorMessage = err, // onError handler
        () => this.completedMessage = 'Completed' // onComplete handler
      );
  }
    
  
//Example 4 : Mouse Event Observer
    ngOnInit() {
    Observable.fromEvent<MouseEvent>(this.elementRef.nativeElement, 'mousemove')
    .debounceTime(20)
    .map(evt => { return {x: evt.clientX, y: evt.clientY}; })
   
    .subscribe(
      coordinate => {
        this.coordinates.unshift(coordinate);
        //this.detectorRef.detectChanges();
      },
      err => console.log('Error:', err),
      () => console.log('Completed')
    );
  }
}
