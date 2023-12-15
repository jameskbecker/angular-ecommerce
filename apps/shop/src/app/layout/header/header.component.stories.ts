import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { CartService } from '../../cart/cart.service';
import { NavigationMenuComponent } from '../../shared/navigation-menu/navigation-menu.component';
import { ShoppingBagComponent } from '../../icons/shopping-bag/shopping-bag.component';
import { SeparatorComponent } from '../../ui/separator/separator.component';
import { IconsModule } from '../../icons/icons.module';

const meta: Meta<HeaderComponent> = {
  title: 'Layout/Header',
  component: HeaderComponent,
  subcomponents: [NavigationMenuComponent],
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [CartService, IconsModule],
      declarations: [
        NavigationMenuComponent,
        ShoppingBagComponent,
        SeparatorComponent,
      ],
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
