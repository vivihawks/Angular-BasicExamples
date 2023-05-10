import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<ng-content></ng-content>`,
  //The :host selector is used whenever style needs to be applied to the selector element of this component. 
  //Without this selector, styles are only applied to the contents of the component within the selector and 
  //not to the selector itself
  styles: [`
    :host {
      padding: 2rem;
      font-size: 2rem;
      font-family: 'Helvetica', sans-serif;
      font-weight: 300;
      color:white;
      background: black;
      margin: 1rem;
      display: inline-block;
    }
  `]
})
export class CardComponent {
  ngOnInit() {
    console.log('card component loaded!');
  }
}