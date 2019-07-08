"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let NgIfComponent = class NgIfComponent {
    constructor() {
        this.show = false;
    }
};
NgIfComponent = __decorate([
    core_1.Component({
        selector: 'ng-if-directive',
        template: `
        <h2>ngIf</h2>
        <button (click)="show=!show">{{show ? 'hide' : 'show'}}</button>
        
        <div *ngIf="show">
            <p>
                <label><input #big type="checkbox" name="size" (change)="0" checked>Big</label>
                <label><input #small type="checkbox" name="size" (change)="0">Small</label>
            </p>
        
            <h3 *ngIf="big.checked">Big heading</h3>
            <p *ngIf="small.checked">Small paragraph</p>
        </div>`
    })
], NgIfComponent);
exports.NgIfComponent = NgIfComponent;
//# sourceMappingURL=ng-if.component.js.map