import { CharacterService } from './character.service';
import { Item } from './items';
import { MyService } from './my.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService, CharacterService]
})
export class AppComponent {
  title = 'Angular 7 Services!';
  items: Array<Item> = [];
  characterCount = 0;
  constructor(private service: MyService) {
    this.items = service.getItems();
    this.characterCount = service.getTotalCharacters();
  }
}
