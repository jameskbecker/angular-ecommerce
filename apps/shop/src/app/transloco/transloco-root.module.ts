import {
  translocoConfig,
  TranslocoModule,
  provideTransloco,
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';

export const translocoConf = translocoConfig({
  availableLangs: [
    { id: 'en', label: 'English' },
    { id: 'de', label: 'German' },
  ],
  reRenderOnLangChange: true,
  fallbackLang: 'es',
  defaultLang: 'en',
  missingHandler: {
    useFallbackTranslation: false,
  },
});

@NgModule({
  imports: [TranslocoModule],
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: translocoConf,
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class TranslocoRootModule {}
