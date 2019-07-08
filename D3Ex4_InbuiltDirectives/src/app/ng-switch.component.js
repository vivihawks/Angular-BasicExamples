"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let NgSwitchComponent = class NgSwitchComponent {
    constructor() {
        this.choice = 'one';
    }
};
NgSwitchComponent = __decorate([
    core_1.Component({
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
        </div>`
    })
], NgSwitchComponent);
exports.NgSwitchComponent = NgSwitchComponent;
//# sourceMappingURL=ng-switch.component.js.map