"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_1 = require("./app");
const combinedobservables_1 = require("./combinedobservables");
const http_1 = require("@angular/http");
const platform_browser_1 = require("@angular/platform-browser");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule, platform_browser_1.BrowserModule],
        declarations: [
            app_1.App,
            combinedobservables_1.ObsCombined
        ],
        bootstrap: [app_1.App]
    })
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map