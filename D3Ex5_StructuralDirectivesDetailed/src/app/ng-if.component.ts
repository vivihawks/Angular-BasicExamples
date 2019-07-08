import {Component} from '@angular/core';

@Component({
    selector: 'ng-if-template',
    template: `
        <h1>ngIf with template</h1>
        
        
        <hr>
        
        <h3>with <code>&lt;template&gt;</code> element</h3>
        <p>
            <button (click)="showElement=!showElement">{{showElement ? 'hide' : 'show'}}</button>
        </p>

        <ng-template [ngIf]="showElement">
            <div>
                <p>
                    <label><input #big type="radio" name="templateSize" (change)="0" checked>Big</label>
                    <label><input #small type="radio" name="templateSize" (change)="0">Small</label>
                </p>
            		
				<div *ngIf="big.checked ; then thenBlock; else elseBlock;"></div>
                <ng-template #thenBlock>
                    <h2>Big header</h2>
                </ng-template>
                <ng-template #elseBlock>
                    <p>Small paragraph</p>
                </ng-template>
            </div>
        </ng-template>`
})
export class NgIfComponent {
    private showDirective = false;
    private showElement = false;
}