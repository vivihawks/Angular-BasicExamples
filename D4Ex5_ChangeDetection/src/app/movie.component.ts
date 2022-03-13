import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Actor } from './actor.model';

@Component({
  selector: 'app-movie',
  styles: ['div {border: 1px solid black}'],
  template: `
    <div>
      <h3>{{ title }}</h3>
      <p>
        <label>Actor:</label>
        <span>{{actor.firstName}} {{actor.lastName}}</span>
      </p>
<<<<<<< HEAD
=======
      
>>>>>>> c2747ff (Angular 12 Upgrade)
    </div>`,
    //Toggle one of Default / OnPush strategies below to understand the differences
  changeDetection: ChangeDetectionStrategy.
   //Default
<<<<<<< HEAD
OnPush
=======
    OnPush
>>>>>>> c2747ff (Angular 12 Upgrade)
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
  @Input() title: string;
  @Input() actor: Actor;
  //Watch how the docheck and onchanges LifecycleHooks are called based on the ChangeDetectionStrategy above
  ngDoCheck(){
    console.log("DoCheck called");
    }
  
    ngOnChanges(){
      console.log("OnChanges called");
<<<<<<< HEAD
=======

>>>>>>> c2747ff (Angular 12 Upgrade)
      }
    
}
//ref = obj1; obj1.name=?

//Obje{prop1,2,3,4......}