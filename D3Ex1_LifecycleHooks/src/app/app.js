"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let App = class App {
    constructor() {
        this.counter = 0;
        this.showMyComponent = true;
    }
    increment() {
        this.counter++;
    }
    toggleMyComponent() {
        this.showMyComponent = !this.showMyComponent;
    }
};
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: `
     <div class="rendered" layout-fill>
      <button (click)="increment()" >Increment</button>
      <button (click)="toggleMyComponent()" >Toggle My Component</button>
      <my-component *ngIf="showMyComponent" [counter]="counter"></my-component>
    </div>
  `,
        changeDetection: core_1.ChangeDetectionStrategy.Default
    })
], App);
exports.App = App;
//# sourceMappingURL=app.js.map