import { Routes } from '@angular/router';

import { RedComponent } from "./red.component";
import { MediumRedComponent } from "./medium-red.component";
import { DarkRedComponent } from "./dark-red.component";
import { LightRedComponent } from "./light-red.component";

export const RedRoutes: Routes = [
    {
        path: 'red',
        component: RedComponent,
        children: [
            {path: '', redirectTo: 'light', pathMatch: 'full'},
            {path: 'light', component: LightRedComponent},
            {path: 'medium', component: MediumRedComponent},
            {path: 'dark', component: DarkRedComponent}
        ]
    }
];