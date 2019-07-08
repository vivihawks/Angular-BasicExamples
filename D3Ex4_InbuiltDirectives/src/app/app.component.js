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
        <div>
            <h2>Angular In-Built Directives</h2>
            <hr>
            <ng-class-directive></ng-class-directive>
            <br><hr><br>
            <ng-for-directive></ng-for-directive>
            <br><hr><br>
            <ng-if-directive></ng-if-directive>
            <br><hr><br>
            <ng-style-directive></ng-style-directive>
            <br><hr><br>
            <ng-switch-directive></ng-switch-directive>
            <br><hr><br>
            <ng-show-hide-directive></ng-show-hide-directive>
            <br><hr><br>
        </div>`,
        styles: ['hr{border: 2px solid red}']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map