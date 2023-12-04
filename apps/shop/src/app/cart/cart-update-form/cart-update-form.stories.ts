import type { Meta, StoryObj } from '@storybook/angular';
import { CartUpdateFormComponent } from './cart-update-form.component';
import { moduleMetadata } from '@storybook/angular';
import { UiModule } from '../../ui/ui.module';
import { CartService } from '../cart.service';
import {CartModule} from "../cart.module";
import {TranslocoRootModule} from "../../transloco/transloco-root.module";

const meta: Meta<CartUpdateFormComponent> = {
  title: 'Forms/CartUpdateForm',
  component: CartUpdateFormComponent,
  tags: ['autodocs'],

  decorators: [
    moduleMetadata({
      imports: [
        CartModule,
        UiModule, TranslocoRootModule
      ],
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
