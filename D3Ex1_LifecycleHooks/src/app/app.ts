import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  template: `
     <div class="rendered" layout-fill >
      
     <h2> Lifecycle Hooks - Example 1</h2>
     <hr/>
     <button (click)="increment()" >Increment</button>
     <button (click)="toggleMyComponent()" >Toggle My Component</button>
     <my-component *ngIf="showMyComponent" [counter]="counter">Dummy Projected component</my-component>
   <lch-parent-component></lch-parent-component>
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
<<<<<<< HEAD
  private showMyComponent: boolean = true;
=======
   showMyComponent: boolean = true;
>>>>>>> c2747ff (Angular 12 Upgrade)

  increment() {
    this.counter++;
  }

  toggleMyComponent() {
    this.showMyComponent = !this.showMyComponent;
  }
}
