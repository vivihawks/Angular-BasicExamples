import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'block-counter',
    template:  `
        <button (click)="updateCount(-1)" [disabled]="!counter.count"> - </button>
        <button (click)="updateCount()"> + </button>
        <span [innerHTML]="blocks" class="blocks"></span>
        {{counter.count || 'Zero'}}`,
    styles: ['.blocks {color: Yellow;}'],
    changeDetection : ChangeDetectionStrategy.OnPush
    // CheckAlways    // CheckOnce     //Checked    // Detached         //Default
})
export class BlockCounterComponent {

     counter: Counter = new Counter;

     updateCount(adjustment:number = 1) {
        this.counter.count += adjustment;
    }
     get blocks() {
        return '&#9609;'.repeat(this.counter.count);
    }
}

class Counter{
  public count: number = 4;
}