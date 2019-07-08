"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let NgClassComponent = class NgClassComponent {
    constructor() {
        this.myClasses = '';
    }
};
NgClassComponent = __decorate([
    core_1.Component({
        selector: 'ng-class-directive',
        template: `
        <h2>ngClass</h2>
        
        <button (click)="myClasses='bright border'">Bright</button>
        <button (click)="myClasses='dull'">Dull</button>
        <button (click)="myClasses=''">Default</button>
        
        <p #part1 class="box big" [ngClass]="myClasses" >
            Classes: {{part1.className}} 
        </p>
        
        <button (click)="big=!big">Big {{big ? 'off' : 'on'}}</button>
        <button (click)="back=!back">Background {{back ? 'off' : 'on'}}</button>
        <button (click)="bord=!bord">Border {{bord ? 'off' : 'on'}}</button>
        
        <p #part2 class="box" [ngClass]="{'big' : big, 'bright' : back, 'border' : bord}">
            Classes: {{part2.className}} 
        </p>
        
        <h3>Class binding</h3>
        <button (click)="brighter=!brighter">Bright {{brighter ? 'off' : 'on'}}</button>
        
        <p #part3 [class.box]="brighter" [class.bright]="brighter" [class.border]="brighter">
            Classes: {{part3.className}} 
        </p>`,
        styles: [`
        .box { max-width: 400px; padding: 5px; }
        .big { font-size: 26px; }
        .dull { background-color: Beige; }
        .bright { color: Blue; background-color: Pink; }
        .border { border: 1px solid Red; }`
        ]
    })
], NgClassComponent);
exports.NgClassComponent = NgClassComponent;
//# sourceMappingURL=ng-class.component.js.map