import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';


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
      Observable.interval(100)
      //For difference (5) number of times
        .take(difference)
        //repeat this logic
        .subscribe(() => {
          this.currentNumber++;
        })
    }

    ///333 Current, 342 New. 9 Diff
    
    return this.currentNumber;
  }
}
