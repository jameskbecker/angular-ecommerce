import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { initialize, mswLoader } from 'msw-storybook-addon';
import handlers from '../src/mocks/handlers';
import i18n from 'storybook-i18n/preview';
import '@angular/localize/init';

setCompodocJson(docJson);
initialize({ onUnhandledRequest: 'warn' });

// @ts-ignore
const i18nDecorators = i18n?.decorators || [];

const preview: Preview = {
  ...i18n,
  decorators: [...i18nDecorators],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: ['Pages', 'Features', 'Layout', 'UI'],
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
