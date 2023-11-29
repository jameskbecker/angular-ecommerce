import type { Meta, StoryObj } from '@storybook/angular';
import { LabelComponent } from './label.component';

const meta: Meta<LabelComponent> = {
  title: 'UI/Label',
  component: LabelComponent,
  tags: ['autodocs'],

  render: (args: LabelComponent) => ({
    props: {
      ...args,
    },
    template: `
      <ui-label>Hey</ui-label>
    `,
  }),
};

export default meta;
type Story = StoryObj<LabelComponent>;

export const Default: Story = {
  args: {},
};
