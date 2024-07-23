import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LazyComponent }   from './lazy.component';
import { LazyRoutesModule } from './lazy.routes';

@NgModule({
  imports: [
    CommonModule,
     SharedModule,
    LazyRoutesModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
