import { NgModule, ModuleWithProviders } from '@angular/core';
import { CounterService } from './counter.service';

@NgModule({

})
export class SharedModule {

//Comment the below method down and add this attribute to the 
//ngModule decorator above to see the difference in behavior
//  providers: [ CounterService ]

<<<<<<< HEAD
    static forRoot(): ModuleWithProviders {
=======
    static forRoot(): ModuleWithProviders<any> {
>>>>>>> c2747ff (Angular 12 Upgrade)
    return {
      ngModule: SharedModule,
      providers: [ CounterService ]
    }
  }
}

