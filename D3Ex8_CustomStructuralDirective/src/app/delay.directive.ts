import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
//<body>
  //<div *appDelay="1000">  
  // -- Content --- 
  //</div>
//</body>
export class DelayDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  
//@Input() appDelay: number;

  @Input()
  set appDelay(time: number){
    setTimeout(
      () => {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
          this.viewContainerRef.createEmbeddedView(this.templateRef);
      },
      time
    );
  }
}