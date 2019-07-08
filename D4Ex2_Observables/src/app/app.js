"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Rx_1 = require("rxjs/Rx");
const Rx = require("rxjs/Rx");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
let App = class App {
    constructor(elementRef, detectorRef) {
        this.elementRef = elementRef;
        this.detectorRef = detectorRef;
        this.values = [];
        //For Example 2
        this.items = [];
        //For Example 4 
        this.coordinates = [];
        //Example 2 : Observable Map
        Rx_1.Observable
            .from([{ price: 1 }, { price: 2 }, { price: 3 }, { price: 4 }, { price: 5 }])
            .map(item => {
            return { price: item.price * 2 };
        })
            .subscribe(item => this.items.unshift(item));
        //Example 3 : Observable Error Handling
        var source = Rx.Observable
            .of("42", "43", "44")
            .delay(500)
            .timeout(1000, new Error('Timeout has occurred.'))
            .catch(() => Rx.Observable.of('Recovering!'));
        var subscription = source.subscribe(x => this.nextMessage = x, // onNext handler
        err => this.errorMessage = err, // onError handler
        () => this.completedMessage = 'Completed' // onComplete handler
        );
    }
    init() {
        //Example 1 : Basic Observable
        this.data = new Rx_1.Observable((observer) => {
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
                observer.complete();
            }, 5000);
        });
        let subscription = this.data.subscribe(value => this.values.push(value), error => this.anyErrors = true, () => this.finished = true);
    }
    //Example 4 : Mouse Event Observer
    ngOnInit() {
        Rx_1.Observable.fromEvent(this.elementRef.nativeElement, 'mousemove')
            .debounceTime(20)
            .map(evt => { return { x: evt.clientX, y: evt.clientY }; })
            .subscribe(coordinate => {
            this.coordinates.unshift(coordinate);
            //this.detectorRef.detectChanges();
        }, err => console.log('Error:', err), () => console.log('Completed'));
    }
};
App = __decorate([
    core_1.Component({
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
        styles: [`h4{font-weight:bold; color: darkgreen; text-decoration: underline;}`]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.ChangeDetectorRef])
], App);
exports.App = App;
//# sourceMappingURL=app.js.map