import { Component, OnInit, Host, SkipSelf, Optional } from '@angular/core';
import { FlowerService } from '../flower.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // provide services
  providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }]

  // viewProviders ensures that only the view gets to see this.
  // With the AnimalService in the viewProviders, the
  // InspectorComponent model doesn't get to see it because the
  // inspector is in the content.
  ,viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }]
})

export class ChildComponent {
  // inject service
  constructor( public flower: FlowerService, public animal: AnimalService) { }

//Provider Search Hierarchy
//~~~~~~~~~~~~~~~~~~~~~~~~~
// Current Component Decorator > Parent Component Decorator .....> Great Grand Parent(Until dependent service is found. If not, error)
//@Self()     decorated parameters are to be fulfilled only by the current component
//@Host()     decorated parameters follow the search from current component to the first grandparent that satisfied the dependency
//@SkipSelf() decorated parameters follow the @Host() route, except that they don't look at the current component at all, as would the @Host decorated ones
//@Optional()   decorated parameters suppress errors if a dependency could not be satisfied

// 1. Comment out the above constructor and alternately
// uncomment the two following constructors to see the
// effects of @Host() and @Host() + @SkipSelf().
//2. Ensure viewProviders is present in partent component's decorator

// constructor( 
//     public flower: FlowerService,
//     @Optional() @Host()  public animal?: AnimalService) { }

// constructor(
//     @Host() public animal : AnimalService,
//     @Host() @Optional() public flower ?: FlowerService) { }

// constructor(
//     @SkipSelf() @Host() public animal : AnimalService,
//     @SkipSelf() @Host() @Optional() public flower ?: FlowerService) { }

}