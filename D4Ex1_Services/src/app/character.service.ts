import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {
  countCharacters(item:string) {
    return Object.keys(item)
    
    //name, description
    .reduce((accumulated, current:string) => {
      return accumulated.concat(item[Number(current)]);
      //return accumulated = accumulated + item[current])
    }, '');
  }
}


//item = { name: 'Item 1', description: 'Epic item!' }

//Object.keys  = ["name", "description"]
//name, description


//accumulated = ''
//accumulated = 'Item 1'
//accumulated = 'Item 1Epic item!'

