import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-two',
  template: `
  {{cdCheck()}}
          <a>Cmp2
          <br>
          <br><h6  style="cursor:pointer;color:blue;"  (click)="cd.detectChanges()">[detectChanges()]</h6>
          <br><h6  style="cursor:pointer;color:blue;"  (click)="cd.markForCheck()">[markForCheck()]</h6>
          <br><h6  style="cursor:pointer;color:blue;"  (click)="cd.detach()">[detach()]</h6>
          <br><h6  style="cursor:pointer;color:blue;"  (click)="cd.reattach()">[reattach()]</h6>
 
          </a>

<ul>
    <li>
        <app-four></app-four>
    </li>
    <li>
        <app-five></app-five>
    </li>
</ul>
  `//,  changeDetection: ChangeDetectionStrategy.OnPush//Change to OnPush and see the behavior difference
})
export class TwoComponent {

  random = Math.random();

  constructor(private el: ElementRef, public cd: ChangeDetectorRef) { }

  cdCheck() {
    hightlight(this.el);
  }
}

//CD - Automatic - Resource Intensive. Could Slowdown App
//CD - Manual
  //- OnPush
  //- Detach