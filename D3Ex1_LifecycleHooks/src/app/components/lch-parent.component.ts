
import { Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit ,
  DoCheck, OnChanges, OnDestroy, OnInit,  Input, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'lch-parent-component',
  template: `
      <h2>Lifecycle Hooks, Parent Component</h2>
      <button (click)="toggle()">Hide/Show Child </button>
      Refer Console for output
      <lch-child-component *ngIf="displayChild"  [message]="'Hello'" ></lch-child-component>
      ` 
})
export class LifecycleParentComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy {
  
  displayChild: boolean=false;

  constructor() {
    console.log("LifecycleParentComponent:Constructor");
  }

  toggle() {
    this.displayChild=!this.displayChild;
  }

  ngOnChanges() {
    console.log("LifecycleParentComponent:OnChanges");
  }


  ngOnInit() {
    console.log("LifecycleParentComponent:OnInit");
  }

  ngDoCheck() {
    console.log("LifecycleParentComponent:DoCheck");
  }

   ngAfterContentInit() {
    console.log("LifecycleParentComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("LifecycleParentComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("LifecycleParentComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("LifecycleParentComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("LifecycleParentComponent:OnDestroy");
  }
}
