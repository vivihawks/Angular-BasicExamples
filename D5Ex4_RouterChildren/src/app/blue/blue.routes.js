"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blue_component_1 = require("./blue.component");
const medium_blue_component_1 = require("./medium-blue.component");
const dark_blue_component_1 = require("./dark-blue.component");
const light_blue_component_1 = require("./light-blue.component");
exports.BlueRoutes = [
    {
        path: 'blue',
        component: blue_component_1.BlueComponent,
        children: [
            { path: '', redirectTo: 'medium', pathMatch: 'full' },
            { path: 'light', component: light_blue_component_1.LightBlueComponent },
            { path: 'medium', component: medium_blue_component_1.MediumBlueComponent },
            { path: 'dark', component: dark_blue_component_1.DarkBlueComponent }
        ]
    }
];
//# sourceMappingURL=blue.routes.js.map