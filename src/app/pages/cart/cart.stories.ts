import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from "@storybook/angular";
import {CartComponent} from "./cart.component";
import {FeaturesModule} from "../../components/features/features.module";
import {UiModule} from "../../components/ui/ui.module";

const meta: Meta<CartComponent> = {
  component: CartComponent,
  decorators: [
    moduleMetadata({
      imports: [ FeaturesModule, UiModule ]
    })
  ],
  render: (args: CartComponent) => ({
    props: {
      ...args,
    },
  }),
  tags: ['autodocs'],

  title: 'Pages/Cart',
};

export default meta;
type Story = StoryObj<CartComponent>;



export const Default: Story = {
  args: {

  }

};
