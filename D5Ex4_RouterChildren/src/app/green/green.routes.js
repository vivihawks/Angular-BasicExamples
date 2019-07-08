"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const green_component_1 = require("./green.component");
const medium_green_component_1 = require("./medium-green.component");
const dark_green_component_1 = require("./dark-green.component");
const light_green_component_1 = require("./light-green.component");
exports.GreenRoutes = [
    {
        path: 'green',
        component: green_component_1.GreenComponent,
        children: [
            { path: '', redirectTo: 'medium', pathMatch: 'full' },
            { path: 'light', component: light_green_component_1.LightGreenComponent },
            { path: 'medium', component: medium_green_component_1.MediumGreenComponent },
            { path: 'dark', component: dark_green_component_1.DarkGreenComponent }
        ]
    }
];
//# sourceMappingURL=green.routes.js.map