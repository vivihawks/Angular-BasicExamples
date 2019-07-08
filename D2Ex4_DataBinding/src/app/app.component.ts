import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div class="rendered">
      <binding-component>
        
      </binding-component>
    </div>
  `
  })
export class AppComponent {
  title = 'Angular 7. Data Binding';
      constructor() {
  }
}

