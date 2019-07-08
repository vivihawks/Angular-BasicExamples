import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {
  countCharacters(item) {
    return Object.keys(item)
    
    //name, description
    .reduce((accumulated, current) => {
      return accumulated.concat(item[current]);
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

