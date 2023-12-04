import {provideTransloco, TRANSLOCO_LOADER, TranslocoModule} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';
import { environment } from '../../environments/environment.development';
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from "./supported-languages";
import {provideHttpClient} from "@angular/common/http";
@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: SUPPORTED_LANGUAGES.map(l => l.code),
        defaultLang: DEFAULT_LANGUAGE.code,
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: environment.production,
      },
      loader: TranslocoHttpLoader
    }),
  ],
})
export class TranslocoRootModule {}
