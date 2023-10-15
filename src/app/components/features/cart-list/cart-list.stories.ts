import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from "@storybook/angular";
import {FormsModule} from "@angular/forms";
import {UiModule} from "../../ui/ui.module";
import {FeaturesModule} from "../features.module";
import {CartListComponent} from "./cart-list.component";
import {CartListItemComponent} from "../../cart-list-item/cart-list-item.component";

const meta: Meta<CartListComponent> = {
  title: 'Components/CartList',
  component: CartListComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ FormsModule, UiModule ],
      declarations: [ CartListItemComponent ],
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
  args: {

  }

};
