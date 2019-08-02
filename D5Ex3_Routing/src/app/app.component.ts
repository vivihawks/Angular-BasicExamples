import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  template: `
    <nav>
      <a [routerLink]="['/component-a']" style="margin-right:10px;">Component One</a> 
      <a [routerLink]="['/component-b', 123]">Component Two (id: 123)</a>
    </nav>

<!--
<color-value>
    Output 
</color-value>
<component-one>
</component-one>
 -->

    <div style="margin-top: 1rem;">
      <button (click)="onClick()">Go to Component Two (param: 456)</button>
    </div>

    <div style="color: green; margin-top: 1rem;">Outlet:</div>
    <div style="border: 2px solid red; padding: 1rem;">
      <router-outlet></router-outlet>
      <---<<< Component output goes here
    </div>
  `
})
export class AppComponent {
  
  constructor (private router: Router) {}
  
  onClick () {
    this.router.navigate(['/component-b', 456]);
  }
}