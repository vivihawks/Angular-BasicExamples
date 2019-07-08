
import { Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit ,
         DoCheck, OnChanges, OnDestroy, OnInit,  Input, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'lch-child-component',
  template: `
      <h2>Lifecycle Hooks, Child Component</h2>
      {{message}} Lifecyle Hooks!
      ` 
})
export class LifecycleChildComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy {

  @Input() message=""; 

  constructor() {
    console.log("LifecycleChildComponent:Constructor");
  }

  ngOnChanges() {
    console.log("LifecycleChildComponent:OnChanges");
  }


  ngOnInit() {
    console.log("LifecycleChildComponent:OnInit");
  }

  ngDoCheck() {
    console.log("LifecycleChildComponent:DoCheck");
  }

   ngAfterContentInit() {
    console.log("LifecycleChildComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("LifecycleChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("LifecycleChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("LifecycleChildComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("LifecycleChildComponent:OnDestroy");
  }

}
