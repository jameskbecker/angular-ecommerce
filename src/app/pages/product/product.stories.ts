import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from "@storybook/angular";
import {ProductComponent} from "./product.component";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {HeaderComponent} from "../../components/header/header.component";
import {UiModule} from "../../components/ui/ui.module";
import {FeaturesModule} from "../../components/features/features.module";
import {CommonModule} from "@angular/common";

const meta: Meta<ProductComponent> = {
  title: 'Pages/Product',
  component: ProductComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [ HeaderComponent ],
      imports: [ HttpClientModule, FeaturesModule, UiModule, CommonModule ],
      providers: [ ProductService ]
    }),
  ],

  render: (args: ProductComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ProductComponent>;



export const Default: Story = {
  args: {
    id: 7153296638214
  }
};
