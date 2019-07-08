import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular 7 | Hello Pipes!';
  today: Date = new Date();
  name = 'Angular 7';
  randomNumber = 20.5423;
  forwardString = 'Watch me flip around !!';
  items: Array<Item> = [
    { name: 'Item 1', description: 'Epic item!' },
    { name: 'Item 2', description: 'As great as the first!' },
    { name: 'Last One', description: 'A round of applause for this one' }
  ];

}

interface Item { name: string; description: string; }

