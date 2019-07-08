import { Routes } from '@angular/router';

import { BlueComponent } from "./blue.component";
import { MediumBlueComponent } from "./medium-blue.component";
import { DarkBlueComponent } from "./dark-blue.component";
import { LightBlueComponent } from "./light-blue.component";

export const BlueRoutes: Routes = [
    {
        path: 'blue',
        component: BlueComponent,
        children: [
            {path: '', redirectTo: 'medium', pathMatch: 'full'},
            {path: 'light', component: LightBlueComponent},
            {path: 'medium', component: MediumBlueComponent},
            {path: 'dark', component: DarkBlueComponent}
        ]
    }
];