import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  const queryParams = new URLSearchParams(location.search);

  if (queryParams.has('disablega')) {
    (window as any)[`ga-disable-${environment.gaMeasurementId}`] = true;
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
