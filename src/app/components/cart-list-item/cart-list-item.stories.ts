import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from "@storybook/angular";
import {CartListItemComponent} from "./cart-list-item.component";
import {FormsModule} from "@angular/forms";
import {UiModule} from "../ui/ui.module";
import {FeaturesModule} from "../features/features.module";
import {CartUpdateFormComponent} from "../features/cart-update-form/cart-update-form.component";

const meta: Meta<CartListItemComponent> = {
  title: 'Components/CartListItem',
  component: CartListItemComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [CartUpdateFormComponent],
      imports: [ UiModule ],
    }),
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
    name: 'STONE ISLAND\n' +
      'DSM Men\'s David-TC Heavy Coat\n' +
      '(Black)\n',
    size: 'Size small',
    sku: '123456789',
    quantity: '1'
  }

};
