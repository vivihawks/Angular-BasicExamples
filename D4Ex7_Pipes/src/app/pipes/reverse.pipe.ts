import { Pipe, PipeTransform } from '@angular/core';

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
