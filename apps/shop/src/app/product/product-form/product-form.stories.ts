import type { Meta, StoryObj } from '@storybook/angular';
import { ProductFormComponent } from './product-form.component';
import { moduleMetadata } from '@storybook/angular';
import stoneIslandHeavyCoat from '../../../mocks/products/stone-island-mens-giaccone-black-aw23-791571649';
import { CartService } from '../../cart/cart.service';

const meta: Meta<ProductFormComponent> = {
  title: 'Features/ProductForm',
  component: ProductFormComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      //imports: [FeaturesModule],
    }),
  ],

  render: (args: ProductFormComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ProductFormComponent>;

export const Default: Story = {
  args: {
    title: stoneIslandHeavyCoat.title,
    variants: stoneIslandHeavyCoat.variants,
  },
};
