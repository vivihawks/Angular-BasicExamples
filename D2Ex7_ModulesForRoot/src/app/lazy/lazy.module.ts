import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LazyComponent }   from './lazy.component';
import { routing } from './lazy.routes';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
