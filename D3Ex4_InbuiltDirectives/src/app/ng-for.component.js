"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let NgForComponent = class NgForComponent {
    constructor() {
        this.people = [
            { id: 1, name: { forename: 'John', surname: 'Doe' } },
            { id: 2, name: { forename: 'John', surname: 'Smith' } },
            { id: 3, name: { forename: 'Peter', surname: 'Scott' } },
            { id: 4, name: { forename: 'Sue', surname: 'Reece' } }
        ];
    }
    trackByPeople(index, person) {
        return person.id;
    }
    forLoopArray(elements) {
        return new Array(elements);
    }
};
NgForComponent = __decorate([
    core_1.Component({
        selector: 'ng-for-directive',
        template: `
        <h2>ngFor</h2>

        <div *ngFor="let person of people; let isOdd=odd; trackBy:trackByPeople">
            <span [class.highlight]="isOdd">{{person.name.forename}} {{person.name.surname}}</span>
        </div>
        
        <h3>For Loop</h3>
        
        <span *ngFor="let item of forLoopArray(15); let i=index; let last=last">
            <span>{{i+1}}{{last ? '' : ','}}</span>
        </span>`,
        styles: ['.highlight {background-color: Lavender }']
    })
], NgForComponent);
exports.NgForComponent = NgForComponent;
//# sourceMappingURL=ng-for.component.js.map