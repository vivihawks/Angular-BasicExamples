import { Input, Directive, ElementRef, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[attributeDirective]'
})
export class AttributeDirective implements OnInit {

    private inc = 1;

    @Input() attributeDirective: string = '';
    @Input() param: any;
    @Input() param1: string = '';
    @Input() param2: string = '';
    @Input("param-3") param3: string = '';

    @Output() private event = new EventEmitter<string>();

    constructor(private el: ElementRef) { }

    ngOnInit() {
        setTimeout(
            () => this.el.nativeElement.innerHTML = `<b style="color:red; cursor:pointer;">This content is because of onInit - ClickMe</b> <br> Parameters : ${this.attributeDirective}, ${this.param?.name}, ${this.param1}, ${this.param2}, ${this.param3}`
            , 2000)
    }

    @HostListener('click') onClick() {
        this.event.emit("click number " + this.inc++);
        this.el.nativeElement.innerHTML = `<b style="color:red; cursor:pointer;">This content is because of HostListener - ClickMe</b> <br> Parameters : ${this.attributeDirective}, ${this.param?.name}, ${this.param1}, ${this.param2}, ${this.param3}`;
    }

}