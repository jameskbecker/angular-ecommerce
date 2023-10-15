import type {Meta, StoryObj} from '@storybook/angular';
import {ProductFormComponent} from "./product-form.component";
import {moduleMetadata} from "@storybook/angular";
import {
  sizeLarge,
  sizeMedium,
  sizeSmall, sizeXLarge
} from "../../../../mocks/products/stone-island-mens-giaccone-black-aw23-791571649/variants";
import {FormsModule} from "@angular/forms";
import {UiModule} from "../../ui/ui.module";
import stoneIslandHeavyCoat from "../../../../mocks/products/stone-island-mens-giaccone-black-aw23-791571649";

const meta: Meta<ProductFormComponent> = {
  title: 'Features/ProductForm',
  component: ProductFormComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ FormsModule, UiModule ],
    })
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
    variants: stoneIslandHeavyCoat.variants
  }

};
