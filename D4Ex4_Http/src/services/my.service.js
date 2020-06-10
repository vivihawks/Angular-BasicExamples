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
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
require("rxjs/Rx");
const HEADER = { headers: new http_1.Headers({ 'Authentication': 'AFDSSASDF123512' }) };
let MyService = class MyService {
    constructor(http) {
        this.http = http;
    }
    getItems() {
        return this.http.get('data/items.json', HEADER)
            .map(res => res.json())
            .catch(this.handleError)
            .toPromise();
    }
    handleError(error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json() || ' Server Error ');
    }
};
MyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MyService);
exports.MyService = MyService;
//# sourceMappingURL=my.service.js.map