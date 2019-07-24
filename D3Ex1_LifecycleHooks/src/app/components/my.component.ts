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
  `,
  changeDetection: ChangeDetectionStrategy.Default
})

export class MyComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() counter: number = 0;
  hooks: Array<string> = [];

//constructor

/*
1. onChanges - I/O values are being initialized 
2. onInit - Component is ready
3. onChanges - anytime i/o changes
*/

  ngOnChanges() {
    this.hooks.push('ngOnChanges');
  }

  ngOnInit() {
    this.hooks.push('ngOnInit');
  }

  // ngDoCheck() {
  // If our component did its own change detection, we would use ngDoCheck and get rid of ngOnChanges
  // }

  ngAfterContentInit() {
    this.hooks.push('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.hooks.push('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.hooks.push('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.hooks.push('ngAfterViewChecked');
  }

  ngOnDestroy() {
    alert('I am being destroyed!');
  }
}
