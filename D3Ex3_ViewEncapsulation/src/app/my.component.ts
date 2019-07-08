import { Component, ViewEncapsulation } from '@angular/core';
import { AttributesService } from './attributes.service';

@Component({
  selector: 'my-component',
  template: `
    <h1 #h1>my first component !</h1>
    <div class="md-title">Child h1 attributes:</div>
    <pre><code>{{service.attributes(h1)}}</code></pre>
  `,
  styles: [`
div, pre {
      color: blue;
    }
  `],
  //Native = Styles Parent -> Child
  //Emulated = Styles Parent -> Child
  //None = Styles Parent <-> Child
    encapsulation: ViewEncapsulation.Emulated // Try "Emulated" and "Native" and "None" as well
})

export class MyComponent {
   service: AttributesService;
  constructor(service: AttributesService) { this.service = service; }
}
