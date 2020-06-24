import { NgZone,Component } from '@angular/core';
@Component({
  selector: 'binding-component',
  template: `
  <h1>Data Binding in Action</h1>
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
      <!-- 
      In the below tempLocal expression, the event listener or any binding is important for Angular to include it in Change Detection.
      Watch what happens if you remove the event binding below. It could be something as simple as "(input)='0'" for it to work.
      If there is no binding, then this text box is not included in Change Detection and the variable will not pick up changes 
      to the text box
      -->
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
  
  constructor(){
    setTimeout( _=> this.componentStyle = "green",2000);
    /*
    setTimeout( 
      function(){
        this.componentStyle = "green"
      },
      1000
    );
    */
    setTimeout(_=> this.componentStyle = "blue",4000);
    
  }
  alertTheWorld(): void {
  
    this.dynamicValue = "Losing! Boo!!!"
   this.componentStyle = 'green';
    alert('I clicked the button!');
  }
}

