"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const common_1 = require("@angular/common");
const app_component_1 = require("./app.component");
const app_routes_1 = require("./app.routes");
const red_component_list_1 = require("./red/red.component-list");
const green_component_list_1 = require("./green/green.component-list");
const blue_component_list_1 = require("./blue/blue.component-list");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            ...red_component_list_1.RedComponentList,
            ...green_component_list_1.GreenComponentList,
            ...blue_component_list_1.BlueComponentList
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map