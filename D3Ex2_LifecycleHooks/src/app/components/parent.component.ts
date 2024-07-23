import { Component, Input, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ChangeDetectionStrategy, SimpleChange, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
//<my-component counter=x>
// my-comp
//compB
//compB2
//ng content : compA
//compC
//</my-component>

//Call Flow :::::> Root Module > App Component > Parent Component > Child Component
@Component({
  selector: 'parent-component',
  template: `
    <h2 #ref1>Lifecycle Hooks, Parent Component</h2>
    <ng-content></ng-content> 
    <h3 layout-margin><small>Counter:</small> {{counter}}</h3>
    <h3 style="color: maroon;border-bottom: 1px dotted maroon;">Lifecycle Hooks, Parent Component Log</h3>
    <h4 *ngFor="let hook of hooks">{{hook}}</h4>
  `
  , styles: ":host{border: 2px solid purple;width: 100%;display:block;padding:0.5%;}"
  , changeDetection: ChangeDetectionStrategy.Default
})

export class ParentComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //Toggle the @input decorator below and see how the ngOnChanges is called or skipped based on it
  @Input()
  counter: number = 0;
  @Input()
  name: String = "";
  hooks: Array<string> = [];
  //constructor
  /*
  Basic
  1. Constructor
  2. onChanges
  3. onInit
  4. afterContentInit (needed for @ContentChildren)
  5. afterViewInit (needed for @ViewChildren)
  6. onDestroy
  
  Advanced
  1. doCheck
  2. afterContentChecked
  3. afterViewChecked
  
  0. Constructor
  1. onChanges - @Input values are being initialized 
  2. onInit - Component Class is ready
  3. onChanges - anytime @Input changes. Called only if @Input changes
  4. doCheck - Runs every time Angular does changeDetection. Triggered although nothing relevant changed on this tree. For custom ways of detecting changes. ALERT - Called very frequently. Implementation must  be light
  5. ** Parent **  DOM Updates / Rendering of the template without bindings
  6. ** Change Detection  - for this component
  7. afterContentInit - @Content children bound / processed from ng-content tag
  8. afterContentChecked - after each doCheck to indicate the content has been checked. First run is after afterContentInit
  9. ** Update Bindings - for this component(values of interpolation / property binding etc are set on the already rendered template)
  10.   >>> **Steps 7 - 9 repeated for every child component until traversal reaches leaf
  11. afterViewinit -  this and children view  initialized
  12. afterViewChecked - after doCheck. View checked
  13. onDestroy - Component is about to be killed. Used usually for Unsubscription(which will enable garbage collection, lest memory leak!)
  
  *** TEASER >>> Compare the order in which messages are shown in the UI vs Console. Reason why?
  */
  @ViewChild("ref1") ref1!: ElementRef;
  constructor() {
    this.hooks.push('Constructor ');
    console.log(" >>> ParentComponent ***Constructor*** Called")
  }

  ngOnChanges(changes: SimpleChanges) {
    this.hooks.push('ngOnChanges ');
    console.log(" >>> ParentComponent ***onChanges*** Called")
    console.log(changes)
  }

  ngOnInit() {
    this.hooks.push('ngOnInit');
    console.log(" >>> ParentComponent ***onInit*** Called")
    console.log(" >>> ParentComponent ***onInit*** Trying to access a view element")
    try{
      console.log(this.ref1.nativeElement);
    }catch(e){
      console.error(" >>> ParentComponent ***onInit*** Caught error trying to access the view element")
    }

  }

  ngDoCheck() {
    // If our component did its own change detection, use this method. This will be called to check if attributes are dirty. Called after ngOnChanges
    this.hooks.push('ngDoCheck');
    console.log(" >>> ParentComponent ***doCheck*** Called")
  }

  ngAfterContentInit() {
    this.hooks.push('ngAfterContentInit');
    console.log(" >>> ParentComponent ***afterContentInit*** Called")
  }

  ngAfterContentChecked() {
    this.hooks.push('ngAfterContentChecked');
    console.log(" >>> ParentComponent ***afterContentChecked*** Called")
  }

  ngAfterViewInit() {
    this.hooks.push('ngAfterViewInit');
    console.log(" >>> ParentComponent ***afterViewInit*** Called")
    console.log(this.ref1.nativeElement);
  }

  ngAfterViewChecked() {
    this.hooks.push('ngAfterViewChecked');
    console.log(" >>> ParentComponent ***afterViewChecked*** Called")
  }

  ngOnDestroy() {
    alert('I am being destroyed!');
    console.log(" >>> ParentComponent ***onDestroy*** Called")
  }
}
