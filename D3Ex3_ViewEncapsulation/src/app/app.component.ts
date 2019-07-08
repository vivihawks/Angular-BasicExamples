import { Component, ViewEncapsulation } from '@angular/core';
import { MyComponent } from './my.component';
import { AttributesService } from './attributes.service';

@Component({
  selector: 'app',
  template: `
    <div flex layout-fill layout="column">
      <h1 #h1>Introducing...</h1>
      <div class="md-title">Parent h1 attributes:</div>
      <pre><code>{{service.attributes(h1)}}</code></pre>
      <my-component></my-component>
<!--      <video></video> -->
    </div>
  `,
    styles: [`
    h1, div, pre {
      color: green ;
    }

 
  `],
  encapsulation: ViewEncapsulation.None // DOn't alter this
})

export class AppComponent {
  service: AttributesService;
  constructor(service: AttributesService) { this.service = service; }
}
