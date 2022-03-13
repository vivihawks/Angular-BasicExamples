import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { SharedModule } from '../shared/shared.module';

import { LazyComponent }   from './lazy.component';
import { routing } from './lazy.routes';

@NgModule({
  imports: [
    SharedModule,
    routing
=======
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LazyComponent }   from './lazy.component';
import { LazyRoutesModule } from './lazy.routes';

@NgModule({
  imports: [
    CommonModule,
     SharedModule,
    LazyRoutesModule
>>>>>>> c2747ff (Angular 12 Upgrade)
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
