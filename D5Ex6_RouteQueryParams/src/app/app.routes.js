"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const component_one_1 = require("./component-one");
exports.routes = [
    { path: '', redirectTo: 'component-one', pathMatch: 'full' },
    { path: 'component-one', component: component_one_1.default }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map