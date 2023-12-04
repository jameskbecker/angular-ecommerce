import { HttpClientModule } from '@angular/common/http';
import {
  TRANSLOCO_LOADER,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './supported-languages';
import { TranslocoHttpLoader } from './transloco-loader';

/**
 * This module provides translations for Storybook.
 * It must not be imported outside of Storybook stories.
 *
 * @private
 */
@NgModule({
  exports: [TranslocoModule],
  imports: [HttpClientModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: SUPPORTED_LANGUAGES.map((l) => l.code),
        defaultLang: DEFAULT_LANGUAGE.code,
        reRenderOnLangChange: true,
        missingHandler: {
          logMissingKey: false,
        },
        fallbackLang: DEFAULT_LANGUAGE.code,
        prodMode: false,
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
})
export class TranslocoStorybookModule {}
