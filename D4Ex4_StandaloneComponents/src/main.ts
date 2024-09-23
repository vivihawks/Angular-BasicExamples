import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';

// import { AppModule } from './app/app.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app-routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';


import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{

  providers:[provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES))]
});

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
