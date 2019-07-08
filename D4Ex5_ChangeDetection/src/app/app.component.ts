import { Component } from '@angular/core';
import { Actor } from './actor.model';

@Component({
  selector: 'app',
  template: `
    <h1>MovieApp</h1>
    <p>{{ slogan }}</p>
    <button type="button" (click)="changeActorProperties()">
      Change Actor Properties
    </button>
    <button type="button" (click)="changeActorObject()">
      Change Actor Object
    </button>
    <div style="margin:5px; font-family:verdana">The name of the Actor in the App Component is {{actor.firstName }}, {{actor.lastName}}</div>
    <app-movie [title]="title" [actor]="actor"></app-movie>`
})
export class AppComponent {
  slogan = 'Just movie information';
  title = 'Terminator 1';
  actor = new Actor('Arnold', 'Schwarzenegger');
  randomNumber2 = 1;
  randomNumber = 1;
  changeActorProperties(): void {
    this.title = `Terminator ` + this.randomNumber--;
    this.actor.firstName = 'Nicholas';
    this.actor.lastName = 'Cage';
  }
  
  changeActorObject(): void {
    this.title = `Terminator ` + this.randomNumber2++;
    this.actor = new Actor('Bruce', 'Willis');
  }
}