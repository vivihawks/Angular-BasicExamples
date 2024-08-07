
import { combineLatest as observableCombineLatest, of as observableOf, AsyncSubject, ReplaySubject, BehaviorSubject, Subject, Observable } from 'rxjs';

import { share } from 'rxjs/operators';
import { Component, ElementRef, ChangeDetectorRef, OnInit, ViewEncapsulation } from '@angular/core';
import * as Rx from 'rxjs';
import { timer, pipe, map } from "rxjs";


@Component({
  selector: 'obs-combined',
  template: `
    <div class="rendered" flex layout>
      <pre>conference$ | json</pre>
    </div>
    <h4>Ex 7 : Observable Creation Sources</h4>
    <ul>
      <li *ngFor="let item of items">
        {{item}}
      </li>
    </ul>

    <h4>Ex 8 : Subjects</h4>
    <output id="output1"></output>

    <h4>Ex 9 : Behavior Subjects</h4>
    <output id="output2"></output>

    <h4>Ex 10 : Replay Subjects</h4>
    <output id="output3"></output>

    <h4>Ex 11 : Async Subjects</h4>
    <output id="output4"></output>

    `,
  styles: [`h4{font-weight:bold; color: darkgreen; text-decoration: underline;}`]
})

export class ObsCombined {

  items: string[] = [];

  constructor() {

    ///////Example 5 //////////////////////////////////////////
    const Observable = Rx.Observable;
    let conference: {} = {};
    // Start: Take these data structures


    ///////Example 6 //////////////////////////////////////////

    //Combination of Observables
    //~~~~~~~~~~~~~~~~~~~~~~~~~~
    //combineLatest, 
    //concat(sequential),
    //merge(interleaved), 
    //forkJoin, 
    //switch, 
    //flatMap, 
    //switchMap, 
    //Zip(combine n observables into a single function which will result in a new observable), 
    //all(every observable result must pass a condition)

    //timerOne emits first value at 1s, then once every 4s
    const timerOne = timer(1000, 4000);
    //timerTwo emits first value at 2s, then once every 4s
    const timerTwo = timer(2000, 4000)
    //timerThree emits first value at 3s, then once every 4s
    const timerThree = timer(3000, 4000)

    //when one timer emits, emit the latest values from each timer as an array

    //Timer 1 - 1 1 1 2 2 2
    //Timer 2 - 0 1 1 1 2 2 
    //Timer 3 - 0 0 1 1 1 2

    const subs = observableCombineLatest([
      timerOne,
      timerTwo,
      timerThree]).subscribe(latestValues => {
        //grab latest emitted values for timers one, two, and three
        const [timerValOne, timerValTwo, timerValThree] = latestValues;
        /*
          Example:
          timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
          timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
          timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
        */
        console.log(
          `Timer One Latest: ${timerValOne}, 
     Timer Two Latest: ${timerValTwo}, 
     Timer Three Latest: ${timerValThree}`
        );
      });
    //Increase the unsubscribe timeout to see output in the console
    setTimeout(() => subs.unsubscribe(), 20)
  }

  ngOnInit() {
    ///////Example 7  Observable Creation / Hot vs Cold / Unsubscription //////////////////////////////////////////
    //Simple observable using create method. Other methods include
    /*  Of   FromEventPattern    FromEvent    FromPromise    Interval
    Range    Timer    Empty    Throw    Never*/

    var observable = new Observable((observer: any) => {
      try {
        observer.next('Example 7')
        observer.next('Starting Up.')
        observer.next('Saying Hi!!')
        setInterval(() => {
          observer.next('Ready to serve')
        }, 1000)
        setTimeout(() => {
          observer.complete('Done.')
        }, 10000)
      }
      catch (error) {
        observer.error(error)
      }
    })
      //Uncomment the below for a Hot Subscription
      //Hot observables are like singletons. They are not copied for each subscriber. 
      //There is only one stream that is shared by multiple subcribers
      .pipe(share())
    let subscription = observable.subscribe({
      next: (val: any) => { this.items.push(val) },
      error: (err: any) => { this.items.push("Ah! snap!! something blew up "); this.items.push(err) },
      complete: () => { this.items.push("Bye!! "); }
    });
    //This is how you unsubscribe
    setTimeout(() => { subscription.unsubscribe() }, 3000)

    var subscription2 = observable.subscribe((data: any) => this.items.push("**Second Subscriber** - " + data))

    //If you want subscribtions to be linked up and cancel the child if the parent unsubscribes
    //subscription.add(subscription2);


    // Our handy function for showing the values:
    function addItem(val: any, num: Number) {
      var node = document.createElement("li");
      var textnode = document.createTextNode(val);
      node.appendChild(textnode);
      document?.getElementById("output" + num)?.appendChild(node);
    }

    ///////Example 8  Subjects//////////////////////////////////////////
    var subject = new Subject<string>();

    var observer1 = subject.subscribe(
      data => addItem('Observer 1: ' + data, 1),
      err => addItem(err, 1),
      () => addItem('Observer 1 Completed', 1)
    )
    subject.next('This is the first message')

    var observer2 = subject.subscribe(
      data => addItem('Observer 2: ' + data, 1)
    )

    subject.next('This is the second message')
    subject.next('This is the third message')
    observer2.unsubscribe();

    subject.next('This is the last message')
    subject.complete();

    ///////Example 9  Behavior Subjects//////////////////////////////////////////

    subject = new BehaviorSubject('Default initial Message for Behavior Subject')
    subject.subscribe({
      next: data => addItem('Observer 1: ' + data, 2),
      error: err => addItem(err, 2),
      complete: () => addItem('Observer 1 Completed', 2)
  })
    subject.next('This is the first message')
    subject.next('This message will be caught by Observer 2 as well')

    var observer2 = subject.subscribe(
      data => addItem('Observer 2: ' + data, 2)
    )

    subject.next('This is the second message')
    subject.next('This is the third message')
    observer2.unsubscribe();

    subject.next('This is the last message')

    ///////Example 10  Replay Subjects//////////////////////////////////////////
    subject = new ReplaySubject(1)
    subject.subscribe(
      data => addItem('Observer 1: ' + data, 3),
      err => addItem(err, 3),
      () => addItem('Observer 1 Completed', 3)
    )
    subject.next('This is the first message')
    subject.next('This is the second message')
    subject.next('This is the third message')
    subject.next('This is the fourth message')

    var observer2 = subject.subscribe(
      data => addItem('Observer 2: ' + data, 3)
    )

    observer2.unsubscribe();

    subject.next('This is the last message')

    //Replay Subject with time window param
    //Time Window = Last 30 messages within 2000 ms before a new subscription
    subject = new ReplaySubject(30, 2000)
    subject.subscribe(
      data => addItem('Observer 1: ' + data, 3),
      err => addItem(err, 3),
      () => addItem('Observer 1 Completed', 3)
    )

    var i: number = 1;
    var int = setInterval(() => subject.next((i++).toString()), 100);

    setTimeout(() => {
      var observer2 = subject.subscribe(
        data => addItem('Observer 2: ' + data, 3)
      )
      clearInterval(int);
    }, 500);


    ///////Example 11  Async Subjects//////////////////////////////////////////
    var subject2 = new AsyncSubject()

    subject2.subscribe(
      data => addItem('Observer 1: ' + data, 4),
      () => addItem('Observer 1 Completed', 4)
    )
    subject2.next('This is the first message')
    subject2.next('This message will be caught by Observer 2 as well')
    setTimeout(() => {
      var observer22 = subject2.subscribe(
        data => addItem('Observer 2: ' + data, 4)
      )
      subject2.complete();
    }, 500);
    subject2.next('This is the second message')
    subject2.next('This is the third message')

    subject2.next('This is the last message')
  }

}