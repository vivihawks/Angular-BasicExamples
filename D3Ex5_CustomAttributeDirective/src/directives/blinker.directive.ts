import { Directive, ElementRef, HostListener,OnInit} from '@angular/core';

@Directive({
  selector: '[blinker]'
})

//<div blinker>
//  blah blah
//</div>
export class Blinker implements OnInit {
	private interval: any;
	private hostElement :ElementRef; 

  constructor(private _element: ElementRef) {
	  this.hostElement = _element;
    /*
    setTimeout(
      () => {
       // clearInterval(interval);
      }, 
      10000
    );*/
  }
  
  ngOnInit(){
	this.startBlinking(this.hostElement);
  }

  @HostListener('mouseenter') onMouseEnter() {
   clearInterval(this.interval);
  }
   @HostListener('mouseleave') onMouseLeave() {
   this.startBlinking(this.hostElement);
  }

  startBlinking( _element: ElementRef){
      
     // clearInterval(this.interval); 
	
      this. interval = setInterval(
        () => {
            let color = _element.nativeElement.style.color;
            _element.nativeElement.style.color
              = (color === '' || color === 'yellow') ? 'red' : 'yellow';
      }, 
      300
  )}; 
}