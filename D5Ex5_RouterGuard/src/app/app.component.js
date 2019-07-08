"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const activate_guard_1 = require("./activate-guard");
let AppComponent = class AppComponent {
    constructor(activateGuard) {
        this.activateGuard = activateGuard;
    }
    checkboxChanged(canActivate) {
        // Update guard when checkbox checked.
        this.activateGuard.setCanActivate(canActivate);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: `
    <nav>
      <a [routerLink]="['component-one']">Component One</a>
      <a [routerLink]="['component-two']">Guarded Component Two</a>
    </nav>
    
    <div style="margin-top: 1rem;">
      Can activate:
      <input #canactivate type="checkbox" (change)="checkboxChanged(canactivate.checked)" />
    </div>
    
    <div style="color: green; margin-top: 1rem;">Outlet:</div>
    <div style="border: 2px solid green; padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
    
    <p>
      Try navigating to component two. It is prevented until checkbox is checked.
    </p>
  `
    }),
    __metadata("design:paramtypes", [activate_guard_1.default])
], AppComponent);
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map