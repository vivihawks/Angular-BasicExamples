import { Component } from '@angular/core';

@Component({
    selector: 'ng-if-directive',
    template: `
        <h2>ngIf</h2>
        <button (click)="show=!show">{{show ? 'hide' : 'show'}}</button>
		 <div *ngIf="show; then thenBlock else elseBlock">
		 </div>
		 <!-- ng-template is new as of A6 -->
        <ng-template #thenBlock>
		If Block showing up
            <p>
                <label><input #big type="checkbox" name="size" (change)="0" checked>Big</label>
                <label><input #small type="checkbox" name="size" (change)="0">Small</label>
            </p>
        
            <h3 *ngIf="big.checked">Big heading</h3>
            <p *ngIf="small.checked">Small paragraph</p>
        </ng-template>
		<ng-template #elseBlock> Else Block Showing up </ng-template>
<br>
<div *ngIf="show">
This is the output of a simple if
</div>	
<div *ngIf="!show">
This is another output of a simple if 
</div>	
		`
})
export class NgIfComponent {
    private show = false;
}