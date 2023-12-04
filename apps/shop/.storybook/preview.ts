import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { initialize, mswLoader } from 'msw-storybook-addon';
import handlers from '../src/mocks/handlers';
import '@angular/localize/init';
import { translocoDecorators } from './with-i18n/i18n-manager.component';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import {
  provideTransloco,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from '../src/app/transloco/transloco-loader';
import { translocoConf } from '../src/app/transloco/transloco-root.module';

setCompodocJson(docJson);
initialize({ onUnhandledRequest: 'bypass' });

export const globalTypes = {
  locale: {
    name: 'Locale',
    title: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'de', title: 'Deutsch' },
      ],
    },
  },
};

const preview: Preview = {
  decorators: [
    moduleMetadata({
      imports: [TranslocoModule],
    }),
    applicationConfig({
      providers: [
        provideHttpClient(),
        provideTransloco({
          config: translocoConf,
          loader: TranslocoHttpLoader,
        }),
      ],
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        //order: ['Pages', 'Features', 'Layout', 'UI'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: { handlers },
  },
  loaders: [mswLoader],
};

export default preview;
