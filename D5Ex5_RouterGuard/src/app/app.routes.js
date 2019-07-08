"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const component_one_1 = require("./component-one");
const component_two_1 = require("./component-two");
const activate_guard_1 = require("./activate-guard");
const deactivate_guard_1 = require("./deactivate-guard");
exports.routes = [
    { path: '', redirectTo: 'component-one', pathMatch: 'full' },
    { path: 'component-one', component: component_one_1.default },
    {
        path: 'component-two',
        component: component_two_1.default,
        canActivate: [activate_guard_1.default],
        canDeactivate: [deactivate_guard_1.default]
    },
    {
        path: 'component-three',
        component: component_two_1.default
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map