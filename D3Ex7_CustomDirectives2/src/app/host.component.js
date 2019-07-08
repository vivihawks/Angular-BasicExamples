"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let HostComponent = class HostComponent {
    constructor() {
        this.elementContent = 'click me';
        this.clickerContent = 'click me as well';
        this.sharedObject = {
            id: 123,
            name: 'one-two-three'
        };
    }
};
HostComponent = __decorate([
    core_1.Component({
        selector: 'host',
        template: `
        <h1>Directive Binding</h1>
        <h3 myDirective="one time init"
            [param]="sharedObject" 
            bind-another="'another param'"
            (event)="elementContent = $event">
            {{elementContent}}
        </h3>
        <p (myClicker)="clickerContent=$event">{{clickerContent}}</p>`
    })
], HostComponent);
exports.HostComponent = HostComponent;
//# sourceMappingURL=host.component.js.map