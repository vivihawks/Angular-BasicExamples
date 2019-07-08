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
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const app_component_1 = require("./app.component");
const ng_if_component_1 = require("./ng-if.component");
const show_and_hide_component_1 = require("./show-and-hide.component");
const ng_switch_component_1 = require("./ng-switch.component");
const ng_for_component_1 = require("./ng-for.component");
const ng_class_component_1 = require("./ng-class.component");
const ng_style_component_1 = require("./ng-style.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            ng_if_component_1.NgIfComponent,
            show_and_hide_component_1.ShowAndHideComponent,
            ng_switch_component_1.NgSwitchComponent,
            ng_for_component_1.NgForComponent,
            ng_class_component_1.NgClassComponent,
            ng_style_component_1.NgStyleComponent
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map