import { CharacterService } from './character.service';
import { Item } from './items';
import { Injectable } from '@angular/core';



// Provider Scopes
//~~~~~~~~~~~~~~~~
// root     : Provide this service at the root module level
// platform : Used when multiple Angular apps co-exist in a single page. This scope ensures singleton nature of the service across all the Angular apps in that page
// any      : One common instance for all eagerly loaded modules and one instance each for every lazy loaded module
@Injectable({providedIn : 'root'})
export class MyService {

  //Observable or Subject here
  public searchTerms: String = '';

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
          (item:any) => {
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

