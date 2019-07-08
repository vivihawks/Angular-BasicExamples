"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let RedComponent = class RedComponent {
};
RedComponent = __decorate([
    core_1.Component({
        template: `
        <div class="very-pale-red padded">
            <h2>Red</h2>
            <p>
                Child menu -
                <a routerLink="light"  routerLinkActive="disabled">Light Red</a> |
                <a routerLink="medium" routerLinkActive="disabled">Medium Red</a> |
                <a routerLink="dark"   routerLinkActive="disabled">Dark Red</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
        styles: ['.very-pale-red {background-color: #ffe6e6;}']
    })
], RedComponent);
exports.RedComponent = RedComponent;
//Router - App Component
//Red - Red Component
//Light
//Medium
//Dark
//Router Outlet
//Green
//Light
//Medium
//Dark
//Router Outlet
//Blue
//Light
//Medium
//Dark
//Router Outlet
//Router Outlet 
//# sourceMappingURL=red.component.js.map