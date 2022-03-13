import '../polyfills';

import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

declare global {
  interface Window {
    ngRef: NgModuleRef<AppModule>;
  }
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window.ngRef) {
    window.ngRef.destroy();
  }
  window.ngRef = ref;

<<<<<<< HEAD
  // Otherise, log the boot error
=======
  // Otherwise, log the boot error
>>>>>>> c2747ff (Angular 12 Upgrade)
}).catch(err => console.error(err));
