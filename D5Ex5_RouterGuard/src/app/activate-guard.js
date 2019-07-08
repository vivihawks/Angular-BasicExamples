"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ActivateGuard = class ActivateGuard {
    constructor() {
        this.can = false;
    }
    canActivate() {
        console.log('ActivateGuard#canActivate called, can: ', this.can);
        if (!this.can) {
            alert('Activation blocked');
            return false;
        }
        return true;
    }
    setCanActivate(can) {
        this.can = can;
    }
};
ActivateGuard = __decorate([
    core_1.Injectable()
], ActivateGuard);
exports.default = ActivateGuard;
//# sourceMappingURL=activate-guard.js.map