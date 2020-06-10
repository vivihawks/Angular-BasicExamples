import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent2Component } from './feature-component2.component';

@NgModule({
  declarations: [FeatureComponent2Component],
  imports: [
    CommonModule
  ],
  exports: [FeatureComponent2Component]
})
export class FeatureModule2Module { }
