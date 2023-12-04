import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { initialize, mswLoader } from 'msw-storybook-addon';
import handlers from '../src/mocks/handlers';
import '@angular/localize/init';
import {moduleMetadata} from "@storybook/angular";
import {TranslocoStorybookModule} from "../src/app/transloco/transloco-storybook.module";
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from "../src/app/transloco/supported-languages";
import {translocoDecorators} from "../src/app/transloco/with-transloco";

setCompodocJson(docJson);
initialize({ onUnhandledRequest: 'bypass' });

export const globalTypes = {
  // add a dropdown menu in the Storybook UI toolbar
  language: {
    name: "Language",
    description: `Choose a language`,
    defaultValue: DEFAULT_LANGUAGE.code,
    toolbar: {
      icon: "globe",
      items: SUPPORTED_LANGUAGES.map((language) => ({
        value: language.code,
        right: language.icon,
        title: language.title,
      })),
    },
  },
};

const preview: Preview = {
  //...i18n,
  decorators: [...translocoDecorators],
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
