import { AsyncSubject } from "rxjs/AsyncSubject";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";
import { Component, ElementRef, ChangeDetectorRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'obs-combined',
  template: `
    <div class="rendered" flex layout>
      <pre>{{conference | json}}</pre>
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
    const events = [
      { id: 1, name: 'ngConf', speakers: [1, 2], sponsors: [1, 2] },
      { id: 2, name: 'Angular Connect', speakers: [1, 2, 3], sponsors: [3, 4] },
    ];

    const users = [
      { id: 1, name: 'Lukas' },
      { id: 2, name: 'Jules' },
      { id: 3, name: 'Jon' }
    ];

    const sponsors = [
      { id: 1, name: 'Firebase' },
      { id: 2, name: 'Ionic' },
      { id: 3, name: 'Auth0' },
      { id: 4, name: 'BackAnd' }
    ];

    const events$ = Observable.of(events);
    const users$ = Observable.of(users);
    const sponsors$ = Observable.of(sponsors);

    const conference$ = Observable.combineLatest(
      events$,
      users$,
      sponsors$,
      (events, users, sponsors) => {
        return events.map(event => {
          var speakers = users.filter(user => event.speakers.indexOf(user.id) > -1);
          var eventSponsors = sponsors.filter(sponsor => event.sponsors.indexOf(sponsor.id) > -1);
          return Object.assign({}, event, { speakers: speakers, sponsors: eventSponsors });
        });
      })
      .subscribe(
        x => { console.log("Data Received - " + x) },
        err => console.log(err),
        () => console.log('complete')
      );
    // Finish: Create an observable that returns THIS structure
    /*
    [
      {id: 1, name: 'ngConf', speakers: [
        {id: 1, name: 'Lukas'},
        {id: 2, name: 'Jules'}
      ], sponsors: [
        {id: 1, name: 'Firebase'},
        {id: 2, name: 'Ionic'}
      ]},
      {id: 2, name: 'Angular Connect', speakers: [
        {id: 1, name: 'Lukas'},
        {id: 2, name: 'Jules'},
        {id: 3, name: 'Jon'}
      ], sponsors: [
        {id: 3, name: 'Auth0'},
        {id: 4, name: 'BackAnd'}
      ]},
    ]
    */

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
    const timerOne = Rx.Observable.timer(1000, 4000);
    //timerTwo emits first value at 2s, then once every 4s
    const timerTwo = Rx.Observable.timer(2000, 4000)
    //timerThree emits first value at 3s, then once every 4s
    const timerThree = Rx.Observable.timer(3000, 4000)

    //when one timer emits, emit the latest values from each timer as an array
    const combined = Rx.Observable
      .combineLatest(
        timerOne,
        timerTwo,
        timerThree,
      );

    //Timer 1 - 1 1 1 2 2 2
    //Timer 2 - 0 1 1 1 2 2 
    //Timer 3 - 0 0 1 1 1 2

    const subscribe = combined.subscribe(latestValues => {
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

    setTimeout(() => subscribe.unsubscribe(), 20000)
  }

  ngOnInit() {
    ///////Example 7  Observable Creation / Hot vs Cold / Unsubscription //////////////////////////////////////////
    //Simple observable using create method. Other methods include
    /*  Of   FromEventPattern    FromEvent    FromPromise    Interval
    Range    Timer    Empty    Throw    Never*/

    var observable = Observable.create((observer: any) => {
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
      .share()
    let subscription = observable.subscribe(
      (val) => { this.items.push(val) },
      (err) => { this.items.push("Ah! snap!! something blew up "); this.items.push(err) },
      (done) => { this.items.push("Bye!! "); this.items.push(done) }
    );
    //This is how you unsubscribe
    setTimeout(() => { subscription.unsubscribe() }, 3000)

    var subscription2 = observable.subscribe((data) => this.items.push("**Second Subscriber** - " + data))

    //If you want subscribtions to be linked up and cancel the child if the parent unsubscribes
    //subscription.add(subscription2);


    // Our handy function for showing the values:
    function addItem(val: any, num: Number) {
      var node = document.createElement("li");
      var textnode = document.createTextNode(val);
      node.appendChild(textnode);
      document.getElementById("output" + num).appendChild(node);
    }

    ///////Example 8  Subjects//////////////////////////////////////////
    var subject = new Subject()

    subject.subscribe(
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

    ///////Example 9  Behavior Subjects//////////////////////////////////////////

    subject = new BehaviorSubject('Default initial Message for Behavior Subject')
    subject.subscribe(
      data => addItem('Observer 1: ' + data, 2),
      err => addItem(err, 2),
      () => addItem('Observer 1 Completed', 2)
    )
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
    subject = new ReplaySubject(2)
    subject.subscribe(
      data => addItem('Observer 1: ' + data, 3),
      err => addItem(err, 3),
      () => addItem('Observer 1 Completed', 3)
    )
    subject.next('This is the first message')
    subject.next('This message will be caught by Observer 2 as well')

    var observer2 = subject.subscribe(
      data => addItem('Observer 2: ' + data, 3)
    )

    subject.next('This is the second message')
    subject.next('This is the third message')
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

    var i = 1;
    var int = setInterval(() => subject.next(i++), 100);

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