"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const component_one_1 = require("./component-one");
const component_two_1 = require("./component-two");
const component_aux_1 = require("./component-aux");
exports.routes = [
    { path: '', redirectTo: 'component-one', pathMatch: 'full' },
    { path: 'component-one', component: component_one_1.default },
    { path: 'component-two', component: component_two_1.default },
    { path: 'component-aux', component: component_aux_1.default, outlet: 'sidebar' },
    { path: 'component-aux2', component: component_aux_1.default, outlet: 'sidebar2' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map