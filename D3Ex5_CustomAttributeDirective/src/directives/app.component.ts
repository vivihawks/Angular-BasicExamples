import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="rendered" flex layout-fill layout>
      <h1 blinker>Blink for 10 seconds please!</h1>
 
      <h1 >Blink for 10 seconds please!</h1>

  <h1 blinker>Blink for 10 seconds please!</h1>


    
    </div>
  `,
  styles: [`
    h1 {
      transition: color 300ms linear;
    }
  `]
})

export class AppComponent {}
