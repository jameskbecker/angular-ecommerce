import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CartListComponent } from './cart-list.component';
import { CartService } from '../../services/cart.service';

const meta: Meta<CartListComponent> = {
  title: 'Components/CartList',
  component: CartListComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [CartService],
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
