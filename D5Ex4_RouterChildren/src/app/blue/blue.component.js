"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let BlueComponent = class BlueComponent {
};
BlueComponent = __decorate([
    core_1.Component({
        template: `
        <div class="very-pale-blue padded">
            <h2>Blue</h2>
            <p>
                Child menu -
                <a routerLink="light"        routerLinkActive="disabled">Light Blue</a> |
                <a routerLink="/blue/medium" routerLinkActive="disabled">Medium Blue</a> |
                <a routerLink="./dark"       routerLinkActive="disabled">Dark Blue</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
        styles: ['.very-pale-blue {background-color: #e6e6ff;}']
    })
], BlueComponent);
exports.BlueComponent = BlueComponent;
//# sourceMappingURL=blue.component.js.map