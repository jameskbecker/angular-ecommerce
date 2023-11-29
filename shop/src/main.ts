/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { worker } from './mocks/browser';

//@ts-ignore
if (process?.env.NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' });
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
