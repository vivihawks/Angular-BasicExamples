"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const red_component_1 = require("./red.component");
const medium_red_component_1 = require("./medium-red.component");
const dark_red_component_1 = require("./dark-red.component");
const light_red_component_1 = require("./light-red.component");
exports.RedRoutes = [
    {
        path: 'red',
        component: red_component_1.RedComponent,
        children: [
            { path: '', redirectTo: 'medium', pathMatch: 'full' },
            { path: 'light', component: light_red_component_1.LightRedComponent },
            { path: 'medium', component: medium_red_component_1.MediumRedComponent },
            { path: 'dark', component: dark_red_component_1.DarkRedComponent }
        ]
    }
];
//# sourceMappingURL=red.routes.js.map