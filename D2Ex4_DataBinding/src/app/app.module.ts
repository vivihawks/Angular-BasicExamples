import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BindingComponent } from './binding.component';
import { AppComponent } from './app.component';
import {FeatureModule1Module} from './feature-module1/feature-module1.module';
import {FeatureModule2Module} from './feature-module2/feature-module2.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
=======
    HttpModule,
>>>>>>> a37972891427254680a219373cdec07372fe2c9f
	FeatureModule1Module,
	FeatureModule2Module //This import is only good for components in this module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
