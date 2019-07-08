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
        selector: 'router-app',
        template: `
        <div>
            <p>
                Parent menu -
                <a routerLink="/red"   routerLinkActive="disabled">Red</a> |
                <a routerLink="/green" routerLinkActive="disabled">Green</a> |
                <a routerLink="/blue"  routerLinkActive="disabled">Blue</a>
            </p>
            <div class="border not-padded" style="border: 2px solid gold">
                <router-outlet></router-outlet>
            </div>    
        </div>`,
        styles: [`
        div {padding: 10px;}
        .not-padded {padding: 0;}
        .border {border: 1px solid #b3b3b3;}
        .disabled {
            pointer-events: none; 
            cursor: default;
            color: #404040;
            text-decoration: none;
        }`
        ],
        encapsulation: core_1.ViewEncapsulation.None
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map