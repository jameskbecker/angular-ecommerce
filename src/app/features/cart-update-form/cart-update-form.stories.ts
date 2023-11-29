import type { Meta, StoryObj } from '@storybook/angular';
import { CartUpdateFormComponent } from './cart-update-form.component';
import { moduleMetadata } from '@storybook/angular';
import { UiModule } from '../../ui/ui.module';
import { FeaturesModule } from '../features.module';
import { CartService } from '../../services/cart.service';

const meta: Meta<CartUpdateFormComponent> = {
  title: 'Forms/CartUpdateForm',
  component: CartUpdateFormComponent,
  tags: ['autodocs'],

  decorators: [
    moduleMetadata({
      imports: [UiModule, FeaturesModule],
      providers: [CartService],
    }),
  ],

  render: (args: CartUpdateFormComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CartUpdateFormComponent>;

export const Default: Story = {
  args: {},
};
