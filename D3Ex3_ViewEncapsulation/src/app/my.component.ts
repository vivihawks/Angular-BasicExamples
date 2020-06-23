import { Component, ViewEncapsulation } from '@angular/core';
import { AttributesService } from './attributes.service';

@Component({
  selector: 'my-component',
  template: `
    <h1 #h1>my first component !</h1>
    <div class="md-title">Child h1 attributes:</div>
    <pre><code>{{service.attributes(h1)}}</code></pre>
    <hr>
    <p> This text is styled by the ng-deep filter</p>
    <hr>
    <p class="hCont"> This text is styled by the ng-context filter</p>
    <hr>
    
  `,

  //:host-context styles are configurable by the caller. Refer app-component html
  styles: [`
div, pre {
      color: blue;
    }
    :host-context(.org) .hCont {
      color:orange;
    }
    :host-context(.yel) .hCont {
      color:yellow;
    }
  `],
  //Native = Uses browser's ShadowDom implementation. The component becomes an isolated DOM. 
  //Styles from the component do not leak out to the global DOM and vice versa. 
  //Deprecated; use ShadowDom instead

  //ShadowDom = Same as native. Native is now deprecated as it uses older version of ShadowDom. 
  //Use ShadowDom instead of native

  //Emulated = Styles from this component will not spill over to the global DOM. However styles from
  //the global DOM will spill over into this component. Styles defined in this component will go down

  //None = Styles defined in this component are defined at the global dom level. This makes them available
  //to the entire document and all other components. These will be injected as style in the <head> element 
  //of the index.html
   // encapsulation: ViewEncapsulation.ShadowDom // Try "Emulated","ShadowDom", "Native" and "None" as well
})
 
export class MyComponent {
   service: AttributesService;
  constructor(service: AttributesService) { this.service = service; }
}
