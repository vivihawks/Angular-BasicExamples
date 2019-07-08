  import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  template: `
    <div *ngFor="let item of [1,2,3,4,5,6]">
      <app-card *appDelay="1000 * item"><!--Container-->
        {{item}}<!--Template-->
      </app-card>
    </div>
  `
})

//1000, 2000, 3000, 4000....
export class AppComponent {
}