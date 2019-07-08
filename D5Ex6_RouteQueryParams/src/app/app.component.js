"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: `
    <nav>
      <a [routerLink]="['/component-one']">No param</a>
      <a [routerLink]="['/component-one']" [queryParams]="{ page: 99 }">Go to Page 99</a>
    </nav>
    <div style="color: green;">Outlet:</div>
    <div style="border: 1px solid green;">
      <router-outlet></router-outlet>
    </div>
  `
    })
], AppComponent);
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map