import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Actor } from './actor.model';

@Component({
  selector: 'app-movie',
  styles: ['div {border: 1px solid black}'],
  template: `
    <div>
      <h3>{{ title }}</h3>
      <p>
        <label>Actor:</label>
        <span>{{actor.firstName}} {{actor.lastName}}</span>
      </p>
    </div>`,
    //Toggle one of Default / OnPush strategies below to understand the differences
  changeDetection: ChangeDetectionStrategy.
   //Default
OnPush
})
export class MovieComponent {
  @Input() title: string;
  @Input() actor: Actor;
  
}
//ref = obj1; obj1.name=?

//Obje{prop1,2,3,4......}