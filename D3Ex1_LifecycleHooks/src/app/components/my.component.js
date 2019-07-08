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
let MyComponent = class MyComponent {
    constructor() {
        this.counter = 0;
        this.hooks = [];
    }
    ngOnInit() {
        this.hooks.push('ngOnInit');
    }
    ngOnChanges() {
        this.hooks.push('ngOnChanges');
    }
    // ngDoCheck() {
    // If our component did its own change detection, we would use ngDoCheck and get rid of ngOnChanges
    // }
    ngAfterContentInit() {
        this.hooks.push('ngAfterContentInit');
    }
    ngAfterContentChecked() {
        this.hooks.push('ngAfterContentChecked');
    }
    ngAfterViewInit() {
        this.hooks.push('ngAfterViewInit');
    }
    ngAfterViewChecked() {
        this.hooks.push('ngAfterViewChecked');
    }
    ngOnDestroy() {
        alert('I am being destroyed!');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MyComponent.prototype, "counter", void 0);
MyComponent = __decorate([
    core_1.Component({
        selector: 'my-component',
        template: `
    <h3 layout-margin><small>Counter:</small> {{counter}}</h3>
    <h1>Lifecyle hook log:</h1>
    <h3 *ngFor="let hook of hooks">{{hook}}</h3>
  `,
        changeDetection: core_1.ChangeDetectionStrategy.Default
    })
], MyComponent);
exports.MyComponent = MyComponent;
//# sourceMappingURL=my.component.js.map