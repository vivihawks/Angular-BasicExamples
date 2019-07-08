"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let NgStyleComponent = class NgStyleComponent {
    constructor() {
        this.big = false;
        this.back = false;
        this.bord = false;
    }
    get myStyles() {
        return {
            'font-size': this.big ? '26px' : '14px',
            'color': this.back ? 'Blue' : 'Black',
            'background-color': this.back ? 'Pink' : 'White',
            'border': this.bord ? '1px solid Red' : ''
        };
    }
};
NgStyleComponent = __decorate([
    core_1.Component({
        selector: 'ng-style-directive',
        template: `
        <h2>ngStyle</h2>
        
        <button (click)="big=!big">Big {{big ? 'off' : 'on'}}</button>
        <button (click)="back=!back">Background {{back ? 'off' : 'on'}}</button>
        <button (click)="bord=!bord">Border {{bord ? 'off' : 'on'}}</button>
        
        <p #part1 class="box" [ngStyle]="myStyles" >
            {{part1.style.cssText}} 
        </p>
        
        <h3>Style binding</h3>
        <button (click)="brighter=!brighter">Bright {{brighter ? 'off' : 'on'}}</button>
        
        <p #part2 class="box" [style.font-size.px]="brighter ? 26 : 14"
                              [style.background-color]="brighter ? 'Pink' : 'White'">
            {{part2.style.cssText}} 
        </p>`,
        styles: ['.box {max-width: 450px; padding: 5px; }']
    })
], NgStyleComponent);
exports.NgStyleComponent = NgStyleComponent;
//# sourceMappingURL=ng-style.component.js.map