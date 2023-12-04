import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CartListComponent } from './cart-list.component';
import { CartService } from '../cart.service';
import {CartListItemComponent} from "../cart-list-item/cart-list-item.component";
import {CartModule} from "../cart.module";
import {UiModule} from "../../ui/ui.module";
import {TranslocoRootModule} from "../../transloco/transloco-root.module";

const meta: Meta<CartListComponent> = {
  title: 'Cart/CartList',
  component: CartListComponent,
  // subcomponents: [CartListItemComponent],
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ CartModule, UiModule, TranslocoRootModule ],
    }),
  ],

  render: (args: CartListComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CartListComponent>;

export const Default: Story = {
  args: {},
};
