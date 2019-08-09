import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div class="rendered">
      <binding-component>
        
      </binding-component>
	  <hr/>
	  <app-feature-component1>
	  </app-feature-component1>
    </div>
  `
  })
export class AppComponent {
  title = 'Angular 7. Data Binding';
      constructor() {
  }
}

