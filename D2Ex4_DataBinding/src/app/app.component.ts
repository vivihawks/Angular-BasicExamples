import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <title> {{title}}</title>
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
  title = 'Angular Data Binding';
      constructor() {

        /*
          1. Identify all  TS and compile to JS - TSC(ng)
          2. Bundle all JS into a handful of JS - Webpack(ng)
          3. Start an http server on port 4200 - Http Server(ng)
          4. Deploy the JS bundle on HTTP server - (ng)
        */
  }
}

