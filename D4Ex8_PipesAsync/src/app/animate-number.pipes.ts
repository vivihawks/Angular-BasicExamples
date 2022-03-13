import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import * as Rx from 'rxjs';
import { from, of , interval} from "rxjs";
import {take, map, catchError,delay, timeout,concat} from 'rxjs/operators';


// naive implementation assumes small number increments
@Pipe({
  name: 'animateNumber',
  pure: false
})
export class AnimateNumberPipe implements PipeTransform {
  private currentNumber: number = null; // intermediary number //old value
  private targetNumber: number = 100;//new value

  transform(targetNumber: number): number {
    if (targetNumber !== this.targetNumber) {
      this.currentNumber = this.targetNumber || targetNumber;
      this.targetNumber = targetNumber;

      const difference = this.targetNumber - this.currentNumber
      //1,2,3,4,5
      //current = 100, new = 105, difference = 5
    //For every 100 ms
      interval(100).pipe(
      //For difference (5) number of times
        take(difference))
        //repeat this logic
        .subscribe(() => {
          this.currentNumber++;
        })
    }

    ///333 Current, 342 New. 9 Diff
    
    return this.currentNumber;
  }
}
