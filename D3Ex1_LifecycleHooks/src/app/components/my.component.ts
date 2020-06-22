import { Component, Input, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
//<my-component counter=x>
//</my-component>
@Component({
  selector: 'my-component',
  template: `
  <ng-content></ng-content>
    <h3 layout-margin><small>Counter:</small> {{counter}}</h3>
    <h1>Lifecyle hook log:</h1>
    <h3 *ngFor="let hook of hooks">{{hook}}</h3>
    <button name="Dummy Button" (click)="0"> Dummy Button </button>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})

export class MyComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //Toggle the @input decorator below and see how the ngOnChanges is called or skipped based on it
  //@Input() 
  counter: number = 0;
  hooks: Array<string> = [];

//constructor
/*
0. Constructor
1. onChanges - I/O values are being initialized 
2. onInit - Component is ready
3. onChanges - anytime i/o changes. Called only if i/o changes
4. doCheck - after onChanges, even though nothing relevant changed. For custom ways of detecting changes. ALERT - Called very frequently. Implementation must  be light
5. ** Parent **  DOM Updates / Rendering of the template without bindings
6. ** Change Detection  - for this component
7. afterContentInit - @Content children bound / processed from ng-content tag
8. afterContentChecked - after each doCheck to indicate the content has been checked. First run is after afterContentInit
9. ** Update Bindings - for this component(values of interpolation / property binding etc are set on the already rendered template)
10.   >>> **Steps 7 - 9 repeated for every child component until traversal reaches leaf
11. afterViewinit -  this and children view  initialized
12. afterViewChecked - after doCheck. View checked
13. onDestroy - Component is about to be killed

*** TEASER >>> Compare the order in which messages are shown in the UI vs Console. Reason why?
*/

  ngOnChanges() {
    this.hooks.push('ngOnChanges');
    console.log(" >>> My Component ***onChanges*** Called")
  }

  ngOnInit() {
    this.hooks.push('ngOnInit');
    console.log(" >>> My Component ***onInit*** Called")
  }

   ngDoCheck() {
  // If our component did its own change detection, use this method. This will be called to check if attributes are dirty. Called after ngOnChanges
    this.hooks.push('ngDoCheck');
    console.log(" >>> My Component ***doCheck*** Called")
  }

  ngAfterContentInit() {
    this.hooks.push('ngAfterContentInit');
    console.log(" >>> My Component ***afterContentInit*** Called")
  }

  ngAfterContentChecked() {
    this.hooks.push('ngAfterContentChecked');
    console.log(" >>> My Component ***afterContentChecked*** Called")
  }

  ngAfterViewInit() {
    this.hooks.push('ngAfterViewInit');
    console.log(" >>> My Component ***afterViewInit*** Called")
  }

  ngAfterViewChecked() {
    this.hooks.push('ngAfterViewChecked');
    console.log(" >>> My Component ***afterViewChecked*** Called")
  }

  ngOnDestroy() {
    alert('I am being destroyed!');
    console.log(" >>> My Component ***onDestroy*** Called")
  }
}
