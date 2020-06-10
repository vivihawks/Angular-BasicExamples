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
const Rx = require("rxjs/Rx");
let ObsCombined = class ObsCombined {
    constructor() {
        ///////Example 5 //////////////////////////////////////////
        const Observable = Rx.Observable;
        let conference = {};
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
        const conference$ = Observable.combineLatest(events$, users$, sponsors$, (events, users, sponsors) => {
            return events.map(event => {
                var speakers = users.filter(user => event.speakers.indexOf(user.id) > -1);
                var eventSponsors = sponsors.filter(sponsor => event.sponsors.indexOf(sponsor.id) > -1);
                return Object.assign({}, event, { speakers: speakers, sponsors: eventSponsors });
            });
        })
            .subscribe(x => { console.log("Data Received - " + x); }, err => console.log(err), () => console.log('complete'));
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
        //timerOne emits first value at 1s, then once every 4s
        const timerOne = Rx.Observable.timer(1000, 4000);
        //timerTwo emits first value at 2s, then once every 4s
        const timerTwo = Rx.Observable.timer(2000, 4000);
        //timerThree emits first value at 3s, then once every 4s
        const timerThree = Rx.Observable.timer(3000, 4000);
        //when one timer emits, emit the latest values from each timer as an array
        const combined = Rx.Observable
            .combineLatest(timerOne, timerTwo, timerThree);
        //1 1 1 2
        //0 1 1 1
        //0 0 1 1
        const subscribe = combined.subscribe(latestValues => {
            //grab latest emitted values for timers one, two, and three
            const [timerValOne, timerValTwo, timerValThree] = latestValues;
            /*
              Example:
              timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
              timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
              timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
            */
            console.log(`Timer One Latest: ${timerValOne}, 
     Timer Two Latest: ${timerValTwo}, 
     Timer Three Latest: ${timerValThree}`);
        });
    }
};
ObsCombined = __decorate([
    core_1.Component({
        selector: 'obs-combined',
        template: `
    <div class="rendered" flex layout>
      <pre>{{conference | json}}</pre>
    </div>
  `
    }),
    __metadata("design:paramtypes", [])
], ObsCombined);
exports.ObsCombined = ObsCombined;
//# sourceMappingURL=combinedobservables.js.map