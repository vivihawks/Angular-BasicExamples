import { Input, Directive, ElementRef, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[myDirective]'
})
export class AttributeDirective implements OnInit {

    private inc = 1;

    @Input() private myDirective: string;
    @Input() private param: any;
    @Input() private another: string;
    
    @Output() private event = new EventEmitter<string>();

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.innerHTML = `init: ${this.myDirective}, param: ${this.param.name}, another: ${this.another}`;
    }

    @HostListener('click') onClick() {
        this.event.emit("click number " + this.inc++);
    }
    
}