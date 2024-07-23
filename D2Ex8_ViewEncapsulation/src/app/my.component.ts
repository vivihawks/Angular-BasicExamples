import { Component, ViewEncapsulation } from '@angular/core';
import { AttributesService } from './attributes.service';

@Component({
  selector: 'my-component',
  template: `
    <h1 #h1>Child Component</h1>
    <div class="md-title">Child h1 attributes:</div>
    <pre><code>{{service.attributes(h1)}}</code></pre>
    <hr>
    <p> This text is styled by the ng-deep filter</p>
    <hr>
    <p class="hCont"> This text is styled by the ng-context filter</p>
    <hr>
    
  `

  //Emulated = Default. Styles from this component will not spill over to the global DOM. However styles from
  //the global DOM will spill over into this component. Styles defined in this component will go down

  //ShadowDom = Same as Emulated. The difference is that styles are written in the document head for emulation 
  //but in the shadow DOM a shadow root is used at component level.

  //None = Styles defined in this component are defined at the global dom level. This makes them available
  //to the entire document and all other components. These will be injected as style in the <head> element 
  //of the index.html
  , encapsulation: ViewEncapsulation.Emulated // Try "Emulated"(Default),"ShadowDom" and "None" as well


  //:host-context styles are configurable by the caller. Refer app-component html
  , styles: [`
    h1, div, pre {
      color: red;
    }
    :host-context(.org) .hCont {
      color:orange;
    }
    :host-context(.yel) .hCont {
      color:yellow;
    }
  `]
})

export class MyComponent {
  service: AttributesService;
  constructor(service: AttributesService) { this.service = service; }
}
