"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const red_routes_1 = require("./red/red.routes");
const green_routes_1 = require("./green/green.routes");
const blue_routes_1 = require("./blue/blue.routes");
exports.routes = [
    { path: '', redirectTo: '/green/medium', pathMatch: 'full' },
    ...red_routes_1.RedRoutes,
    ...green_routes_1.GreenRoutes,
    ...blue_routes_1.BlueRoutes
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map