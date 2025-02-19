import { Component } from '@angular/core';

@Component({
    selector: 'ng-switch-directive',
    template: `
        <h2>ngSwitch</h2>
        
        <select #select [(ngModel)]="choice">
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="another">another</option>
        </select>
        
        <div [ngSwitch]="choice">
            <h3 *ngSwitchCase="'one'">First</h3>
            <h3 *ngSwitchCase="'two'">Second</h3>
            <h3 *ngSwitchCase="'three'">Third</h3>
            <h3 *ngSwitchDefault>Default</h3>
        </div>
        
         <h2>In-built Control Flow - Switch</h2>
         @switch(choice){
            @case('one') {<h3>First</h3> }
            @case('two') { <h3>Second</h3>}
            @case('three') { <h3>Third</h3>}
            @default { <h3>Default</h3>}
         }
        `


})
export class NgSwitchComponent {
    choice: string = 'one';
}