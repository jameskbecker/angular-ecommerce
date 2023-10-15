import type {Meta, StoryObj} from '@storybook/angular';
import {InputComponent} from "./input.component";
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {FormsModule} from "@angular/forms";

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ FormsModule ]
    })
  ],
  render: (args: InputComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    type: 'email',
    placeholder: 'Email'
  }
};

export const Disabled: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
    disabled: true
  }
};

const labelDecorator = componentWrapperDecorator(story => `
        <div style="display: flex; flex-direction: column; gap: 4px;">
            <app-label htmlFor="email">Email</app-label>
            ${story}
        </div>
      `)



export const withLabel: Story = {
  decorators: [labelDecorator],
  render: (args) => ({
    props: {
      id: 'email',
      inputType: 'email',
      placeholder: 'Email',
    },
  })
};

const fileDecorator = componentWrapperDecorator(story => {
  return `
          <div style="display: flex; flex-direction: column; gap: 8px;">
              <app-label htmlFor="picture">Picture</app-label>
              ${story}
          </div>
        `;
})

export const File: Story = {
  decorators: [ fileDecorator ],
  render: (args) => ({
    props: {
      id: 'picture',
      inputType: 'file',
      placeholder: 'No file chosen',
    },
  })
};

const buttonDecorator =  componentWrapperDecorator(story => `
        <div style="display: flex; width: 100%; align-items: center; gap: 8px;">
            ${story}
            <app-button label="Subscribe"/>
        </div>
      `)

export const withButton: Story = {
  decorators: [ buttonDecorator ],
  render: (args) => ({
    props: {
      id: 'email',
      inputType: 'email',
      placeholder: 'Email',
    },
  })
};

const formDecorator = componentWrapperDecorator(story => `
      <form style="display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <app-label htmlFor="email">Email</app-label>
          ${story}
        </div>
        <app-button label="Submit"/>
      </form>

      `)

export const Form: Story = {
  decorators: [ formDecorator ],
  render: (args) => ({
    props: {
      id: 'email',
      inputType: 'email',
      placeholder: 'Email',
    },
  })
};
