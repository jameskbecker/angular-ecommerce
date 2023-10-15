import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {initialize, mswLoader} from "msw-storybook-addon";
import {handlers} from "../src/mocks/handlers";
import {moduleMetadata} from "@storybook/angular";
import {UiModule} from "../src/app/components/ui/ui.module";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "../src/app/components/ui/button/button.component";
import cartListItemStories from "../src/app/components/cart-list-item/cart-list-item.stories";
import {CartListItemComponent} from "../src/app/components/cart-list-item/cart-list-item.component";

setCompodocJson(docJson);
initialize({ onUnhandledRequest: 'bypass', });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: ['Pages', 'Features', 'Components', 'UI']
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    decorators: [
      moduleMetadata({
        declarations: [CartListItemComponent]
      })
    ],
    msw: { handlers },

  },
  loaders: [mswLoader],
};

export default preview;
