import { Routes } from '@angular/router';

import { GreenComponent } from "./green.component";
import { MediumGreenComponent } from "./medium-green.component";
import { DarkGreenComponent } from "./dark-green.component";
import { LightGreenComponent } from "./light-green.component";

export const GreenRoutes: Routes = [
    {
        path: 'green',
        component: GreenComponent,
        children: [
            {path: '', redirectTo: 'medium', pathMatch: 'full'},
            {path: 'light', component: LightGreenComponent},
            {path: 'medium', component: MediumGreenComponent},
            {path: 'dark', component: DarkGreenComponent}
        ]
    }
];

