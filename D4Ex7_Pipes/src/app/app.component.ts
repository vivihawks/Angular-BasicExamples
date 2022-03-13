import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
>>>>>>> c2747ff (Angular 12 Upgrade)
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Angular 9 | Hello Pipes!';
=======
  title = 'Angular | Hello Pipes!';
>>>>>>> c2747ff (Angular 12 Upgrade)
  today: Date = new Date();
  name = 'Angular';
  randomNumber = 20.5423;
  forwardString = 'Watch me flip around !!';
  items: Array<Item> = [
    { name: 'Item 1', description: 'Epic item!' },
    { name: 'Item 2', description: 'As great as the first!' },
    { name: 'Last One', description: 'A round of applause for this one' }
  ];

  ngOnInit(){
    alert(this.items)
<<<<<<< HEAD
=======
    // new Observable().pipe(
    //   map(),
    //   tap(),
    //   timeout()
    //   //Other Post processors
    // ).subscribe();
>>>>>>> c2747ff (Angular 12 Upgrade)
  }

}

interface Item { name: string; description: string; }

