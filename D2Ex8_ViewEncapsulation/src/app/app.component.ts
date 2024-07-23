import { Component, ViewEncapsulation } from '@angular/core';
import { MyComponent } from './my.component';
import { AttributesService } from './attributes.service';

@Component({
  selector: 'app-comp',
  template: `
    <div flex layout-fill layout="column">
      <h1 #h1>Root Component</h1>
      <div class="md-title">Parent h1 attributes:</div>
      <pre><code>{{service.attributes(h1)}}</code></pre>
      </div>
      <hr>
      <div class="org"> 
        <my-component></my-component>
      </div>
<!--      <video></video> -->
  `,
  styles: [`
    h1, div {
      color: green ;
    }
    ::ng-deep p{
      color:purple;
      font-weight:bold;
    }
    :host{
      cursor:move;
    }
  `]
  // ::ng-deep, >>> and /deep/ are one and the same. ViewEncapsulation should be Emulated for this to work
  //Option 1 - NG DEep at Parent and Emulated Encapsulation
  //Option 2 - No NG Deep at Parent and None Encapsulation
})

export class AppComponent {
  service: AttributesService;
  constructor(service: AttributesService) { this.service = service; }
}
