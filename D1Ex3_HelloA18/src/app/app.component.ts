import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  greeting = 'Angular | Hello Angular!';
  y=0;

   test():void{
      var x = 0;
  }
}
