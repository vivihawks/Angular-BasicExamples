import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RedRoutes } from "./red/red.routes";
import { GreenRoutes } from "./green/green.routes";
import { BlueRoutes } from "./blue/blue.routes";

export const routes: Routes = [
    {path: '', redirectTo: '/red/medium', pathMatch: 'full'},
    ...RedRoutes,
    ...GreenRoutes,
    ...BlueRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);