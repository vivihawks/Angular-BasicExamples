import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent1Component } from './feature-component1.component';
import { FeatureModule2Module } from '../feature-module2/feature-module2.module';

@NgModule({
  declarations: [FeatureComponent1Component],
  imports: [
    CommonModule,
	FeatureModule2Module
  ],
  exports: [FeatureComponent1Component]
})
export class FeatureModule1Module { }
