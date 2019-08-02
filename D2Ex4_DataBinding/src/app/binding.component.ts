import { NgZone,Component } from '@angular/core';
@Component({
  selector: 'binding-component',
  template: `
    <div>
      <h2>Interpolation</h2>
      {{interpolatedValue}}
    </div>
    <br/>
<div>
      <h2>Property Binding</h2>
      <!-- attr.* class.* style.* -->
      <span [style.color]="componentStyle">Some colored text!</span>
    </div>
<br/>
    <div >
      <h2>Event Binding</h2>
    <div>
        <label>Click the button, alert the world!</label>
        <br>
        <button (click)="alertTheWorld()">Click me!</button>
      </div>
    </div>
    <br/>
    <div >
      <h2>Two-way Binding</h2>
      <input [(ngModel)]="dynamicValue" type="text"
                placeholder="Watch the text update!"/>
      <br>
      <span>{{dynamicValue}}</span>
    </div>
    <div >
      <h2>Template Local Variable a.k.a Aliases</h2>
      <input type="text" placeholder="Watch the text update below!" #tempLocal (input)="tempLocal.value = $event.target.value" />
      <br>
      <span>{{tempLocal?.value}}</span>
    </div>
  
  `,
  styles: [`
    h2 {
      margin-bottom: 5px;
    }
  `]
})

export class BindingComponent {
  interpolatedValue : string = 'This is my Awesome Interpolated Value';
  componentStyle: string = 'red';
  dynamicValue: string = 'Winning!';

  alertTheWorld(): void {
    this.dynamicValue = "Losing! Boo!!!"
   this.componentStyle = 'green';
    alert('I clicked the button!');
  }
}

