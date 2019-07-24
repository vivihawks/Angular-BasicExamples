import { Component } from '@angular/core';

@Component({
    selector: 'ng-class-directive',
    template: `
        <h2>ngClass</h2>
        
        <button (click)="myClasses='bright border'">Bright</button>
        <button (click)="myClasses='dull'">Dull</button>
        <button (click)="myClasses=''">Default</button>

<!--
This is part of the Angular compiler and you can't build a custom binding variant following this binding style.
The only supported are [class.xxx]="...", [style.xxx]="...", and [attr.xxx]="..."

Using [ngClass] you're able to apply multiple classes in a really convenient way. 
You can even apply a function that will return an object of classes. [class. makes
you able to apply only one class (of course you can use class. a few times but it looks really bad).

<div [class.example-class]="condition"></div>
<span [style.color]="componentStyle">Some colored text!</span>
-->
        <p #part1 class="box big" [ngClass]="myClasses" [class.box3]="true">
            Classes: {{part1.className}} 
        </p>
        
        <button (click)="big=!big">Big {{big ? 'off' : 'on'}} >>>---->>> {{big}}</button>
        <button (click)="back=!back">Background {{back ? 'off' : 'on'}}</button>
        <button (click)="bord=!bord">Border {{bord ? 'off' : 'on'}}</button>
        
        <p #part2 class="box" [ngClass]="{'big' : big, 'bright' : back, 'border' : bord}">
            Classes: {{part2.className}} 
        </p>
        
        <h3 >Class binding</h3>
        <button (click)="brighter=!brighter">Bright {{brighter ? 'off' : 'on'}}</button>
        
        <p #part3 [class.box]="brighter" [class.bright]="brighter" [class.border]="brighter">
            Classes: {{part3.className}} 
        </p>`,
    styles: [`
        .box { max-width: 400px; padding: 5px; }
        .big { font-size: 26px; }
        .dull { background-color: Beige; }
        .bright { color: Blue; background-color: Pink; }
        .border { border: 1px solid Red; }`
    ]
})
export class NgClassComponent {
    private myClasses = '';
}