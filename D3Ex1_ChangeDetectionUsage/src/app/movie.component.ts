import { ApplicationRef, ChangeDetectorRef, Component, ElementRef, Input, NgZone } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Actor } from './actor.model';

@Component({
  selector: 'app-movie',
  styles: ['div {border: 1px solid black}'],
  template: `
  {{test()}}
    <div>
      <h3>{{ title }}</h3>
      <p>
        <label>Actor:</label>
        <span>{{actor.firstName}} {{actor.lastName}}</span>
      </p>
    </div>`,
  //Toggle one of Default / OnPush strategies below to understand the differences
  changeDetection: ChangeDetectionStrategy.
     Default //Infinite Loop ISSUE - Ensure Zone.js is disable in main.ts file.
  //OnPush
  /*
  OnPush tagged components and their entire children tree will be skipped in the Change Detection cycle
  OnPush will still trigger full Change Detection when
    - the input reference has changed
    - the component or one of its children triggers an event handler
    - change detection is triggered manually
    - an observable linked to the template via the async pipe emits a new value
  */
})
export class MovieComponent {
  @Input() title: string = '';
  @Input() actor: Actor = new Actor('', '');
  i: number = 0;

  constructor(public cdr: ChangeDetectorRef, protected er: ElementRef) {
  }
  test() {
    this.er.nativeElement.style = "color:red"; //setTimeout(() => this.er.nativeElement.style = "color:black", 500)
  }
  //Watch how the docheck and onchanges LifecycleHooks are called based on the ChangeDetectionStrategy above
  ngDoCheck() {
    console.log("Child DoCheck called");
  }

  ngOnChanges() {
    console.log("Child OnChanges called");
  }

}