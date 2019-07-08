import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchService } from './services/search.service';
import { AppComponent } from './app.component'
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, 
    ReactiveFormsModule, 
    FormsModule, 
    HttpClientModule,HttpClientJsonpModule],
  providers: [SearchService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
