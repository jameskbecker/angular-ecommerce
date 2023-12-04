import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { CartService } from '../../cart/cart.service';

const meta: Meta<HeaderComponent> = {
  title: 'Layout/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      // declarations: [LocaleManagerComponent],
      //imports: [TranslocoRootModule],
      providers: [CartService],
    }),
  ],

  render: (args: HeaderComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {},
};
