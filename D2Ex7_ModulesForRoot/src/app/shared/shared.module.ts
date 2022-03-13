import { NgModule, ModuleWithProviders } from '@angular/core';
import { CounterService } from './counter.service';

@NgModule({

})
export class SharedModule {

//Comment the below method down and add this attribute to the 
//ngModule decorator above to see the difference in behavior
//  providers: [ CounterService ]

    static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [ CounterService ]
    }
  }
}

