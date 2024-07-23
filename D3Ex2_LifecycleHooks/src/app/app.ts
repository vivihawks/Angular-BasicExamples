import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  template: `
     <div class="rendered" layout-fill >
      
     <h2> Lifecycle Hooks, Root Component</h2>
     <hr/>
     <button (click)="increment()" >Increment</button>
     <button (click)="toggleMyComponent()" >Toggle My Component</button>
     <br>
     <br>
     <parent-component *ngIf="showMyComponent" [counter]="counter" name="{{'Test' + counter}}" >
      <child-component [message]="counter.toString()"></child-component>
     </parent-component>


     </div>
  `,
  styles: [`
        .box { border: 2px dotted red; position: relative; float: left;max-width: 50%; height:500px;padding: 5px; overflow:scroll;}
        .rendered{height:100%;}
        hr{color:blue;}
        :host{border: 3px solid orange;width: 100%;display:block;padding:0.5%;}
       `
  ]

})

export class App {
  counter: number = 0;
  showMyComponent: boolean = true;

  increment() {
    this.counter++;
  }

  toggleMyComponent() {
    this.showMyComponent = !this.showMyComponent;
  }
}
