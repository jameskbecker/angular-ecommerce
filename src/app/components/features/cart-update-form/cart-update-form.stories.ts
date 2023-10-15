import type {Meta, StoryObj} from '@storybook/angular';
import {CartUpdateFormComponent} from "./cart-update-form.component";

const meta: Meta<CartUpdateFormComponent> = {
  title: 'Components/CartUpdateForm',
  component: CartUpdateFormComponent,
  tags: ['autodocs'],


  render: (args: CartUpdateFormComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CartUpdateFormComponent>;



export const Default: Story = {
  args: {

  }

};
