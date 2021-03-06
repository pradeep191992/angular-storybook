import { InputComponent } from './../input/input.component';
import { ResetFormComponent } from './reset-form.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

export default {
  title: 'Common/Forms/Reset Form',
  component: ResetFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
    }),
    componentWrapperDecorator((story: any) => `<div style="padding:20px;height: 100vh;background-color: #0F2D60;">${story}</div>`),
  ],
  argTypes: {
    // backgroundColor: { control: 'color' },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
    control: { type: 'select' },
  },
} as Meta;

const Template: Story<ResetFormComponent> = (args: ResetFormComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  // first: true,
};
