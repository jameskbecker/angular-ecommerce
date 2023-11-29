import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CartListItemComponent } from './cart-list-item.component';
import { UiModule } from '../../../ui/ui.module';
import { FeaturesModule } from '../../features.module';
import { CartService } from '../../../services/cart.service';

const meta: Meta<CartListItemComponent> = {
  title: 'Features/CartListItem',
  component: CartListItemComponent,
  tags: ['autodocs'],
  decorators: [
    // moduleMetadata({
    //   imports: [UiModule, FeaturesModule],
    //   providers: [CartService],
    // }),
  ],

  render: (args: CartListItemComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CartListItemComponent>;

export const Default: Story = {
  args: {
    name: 'STONE ISLAND\n' + "DSM Men's David-TC Heavy Coat\n" + '(Black)\n',
    size: 'Size small',
    sku: '123456789',
    quantity: 1,
  },
};
