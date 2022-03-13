import { Pipe, PipeTransform } from '@angular/core';

<<<<<<< HEAD
=======
//ng generate pipe Reverse
>>>>>>> c2747ff (Angular 12 Upgrade)
@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform(value: String, args: Array<string>) : any {
    return value.split('').reverse().join('');

    //This is text
    //[T][h][i][s]....
    //[t][x][e][t]....
    //txet si sihT
  }
}
