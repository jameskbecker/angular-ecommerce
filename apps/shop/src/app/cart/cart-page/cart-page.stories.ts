import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CartPageComponent } from './cart-page.component';
import {CartModule} from "../cart.module";
import {UiModule} from "../../ui/ui.module";
import {TranslocoRootModule} from "../../transloco/transloco-root.module";

const meta: Meta<CartPageComponent> = {
  title: 'Cart/CartPage',
  component: CartPageComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ CartModule, UiModule, TranslocoRootModule ],
    }),
  ],
  render: (args: CartPageComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CartPageComponent>;

export const Default: Story = {
  args: {},
};
