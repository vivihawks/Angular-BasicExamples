import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <nav>
      <a [routerLink]="['/component-one']">Component One</a>
      <a [routerLink]="['/component-two']">Component Two</a>
      <a [routerLink]="[{ outlets: { 'sidebar': ['component-aux'],'sidebar2': ['component-aux2'] } }]">Component Aux</a>
      <a [routerLink]="[{ outlets: {  'sidebar2': ['component-aux2'] } }]">Component Aux2</a>
    </nav>
    <div style="color: green; margin-top: 1rem;">Outlet:</div>
    <div style="border: 2px solid green; padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
    
    <div style="color: green; margin-top: 1rem;">Sidebar Outlet:</div>
    <div style="border: 2px solid blue; padding: 1rem;">
      <router-outlet name="sidebar"></router-outlet>
    </div>

    <div style="color: green; margin-top: 1rem;">Sidebar Outlet:</div>
    <div style="border: 2px solid blue; padding: 1rem;">
      <router-outlet name="sidebar2"></router-outlet>
    </div>
  `
})
export class AppComponent {
  
}