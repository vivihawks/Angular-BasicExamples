import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
//<body>
  //<div *appDelay="1000">  
  // -- Content --- 
  //</div>
  //<span *appDelay="1000">  
  // -- Content --- 
  //</span>
//</body>
<<<<<<< HEAD
=======

// ng generate dirctive Delay

>>>>>>> c2747ff (Angular 12 Upgrade)
export class DelayDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  //@Input() abc: number;  

<<<<<<< HEAD
// @Input() appDelay: number;
=======
 //@Input() appDelay: number;
>>>>>>> c2747ff (Angular 12 Upgrade)

  @Input()
  set appDelay(time: number){
    setTimeout(
      () => {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.viewContainerRef.createEmbeddedView(this.templateRef);
<<<<<<< HEAD
        this.viewContainerRef.createEmbeddedView(this.templateRef);
=======
        
>>>>>>> c2747ff (Angular 12 Upgrade)
  },
      time
    );
  }
}