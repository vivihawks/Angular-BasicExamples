import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  // { path: 'info', component: InfoComponent },
  { path: 'info', loadComponent:()=> import('./info/info.component').then(m=>m.InfoComponent) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'**',component:PageNotFoundComponent}
];

