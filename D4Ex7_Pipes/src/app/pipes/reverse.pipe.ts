import { Pipe, PipeTransform } from '@angular/core';

//ng generate pipe Reverse 
//ng g p Reverse
@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform(value: String, args: String) : any {
    return value.split('').reverse().join('');

    //This is text
    //[T][h][i][s]....
    //[t][x][e][t]....
    //txet si sihT
  }
}
