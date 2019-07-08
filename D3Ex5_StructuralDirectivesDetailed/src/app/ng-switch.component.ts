import { Component } from '@angular/core';

@Component({
    selector: 'ng-switch-template',
    template: `
        <h1>ngSwitch with template</h1>
        
        <select #select [(ngModel)]="choice">
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="another">another</option>
        </select>
        
        <p [ngSwitch]="choice">
            <ng-template [ngSwitchCase]="'one'"><span>First</span></ng-template>
            <ng-template [ngSwitchCase]="'two'"><span>Second</span></ng-template>
            <ng-template [ngSwitchCase]="'three'"><span>Third</span></ng-template>
            <ng-template ngSwitchDefault><span>Default</span></ng-template>
        </p>`
})
export class NgSwitchComponent {
    private choice: string = 'one';
}