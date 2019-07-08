import { CharacterService } from './character.service';
import { Item } from './items';
import { Injectable } from '@angular/core';
@Injectable()
export class MyService {
  private items: Array<Item> = [
    { name: 'Item 1', description: 'Epic item!' },
    { name: 'Item 2', description: 'As great as the first!' },
    { name: 'Last One1', description: 'A round of applause for this one' }
  ];

  getItems() {
    return this.items;
  }
  constructor(private charService: CharacterService) { }
  
  getTotalCharacters() {
    return  this.items.map(
          (item) => {
            //Item 1Epic item!
            //Item 2As great as the first!
            //Last OneA round of applause for this one
            return this.charService.countCharacters(item);
          }
      )
      //Item 1Epic item!Item 2As great as the first!Last OneA round of applause for this one
      .join('')
      //[I][t][e][m][].... 1Epic item!Item 2As great as the first!Last OneA round of applause for this one
      .split('')
      .length;
  }
}

