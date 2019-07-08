import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  template: `
     <div class="rendered" layout-fill >
      
      <div class="box"> 
        <h2> Lifecycle Hooks - Example 1</h2>
        <hr/>
        <button (click)="increment()" >Increment</button>
        <button (click)="toggleMyComponent()" >Toggle My Component</button>
        <my-component *ngIf="showMyComponent" [counter]="counter"></my-component>
      </div>
      <div class="box"> 
        <h2> Lifecycle Hooks - Example 2</h2>
        <hr/>
        <lch-parent-component>
        </lch-parent-component>
      </div>
    </div>
  `,
    styles: [`
        .box { border: 2px dotted red; position: relative; float: left;max-width: 50%; height:500px;padding: 5px; overflow:scroll;}
        .rendered{height:100%;}
        hr{color:blue;}
       `
    ]
  ,
  changeDetection: ChangeDetectionStrategy.Default
})

export class App {
  private counter: number = 0;
  private showMyComponent: boolean = true;

  increment() {
    this.counter++;
  }

  toggleMyComponent() {
    this.showMyComponent = !this.showMyComponent;
  }
}
