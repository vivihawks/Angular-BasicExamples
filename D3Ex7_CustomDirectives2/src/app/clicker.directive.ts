import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[myClicker]'
})
export class ClickerDirective {

    private inc = 1;

    @Output() private myClicker = new EventEmitter<string>();

    constructor(private el: ElementRef) {}

    @HostListener('click') onClick() {
        this.myClicker.emit("directive name and @Input are the same " + this.inc++);
    }
    
}