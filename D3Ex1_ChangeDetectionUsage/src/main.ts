import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Enable the line below to disable Angular's Change Detection Library - Zone.js
// platformBrowserDynamic().bootstrapModule(AppModule,{ ngZone: 'noop' } );
//***IMPORTANT*** If the noop is disabled as below, remove the test() method's timeout in MovieComponentClass, lest the app will get into an infinite loop */
platformBrowserDynamic().bootstrapModule(AppModule);
