import { Pipe, PipeTransform } from '@angular/core';
import { text } from '@angular/core/src/render3';

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
