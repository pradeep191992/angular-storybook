import { LoginFormComponent } from './login-form.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { InputComponent } from '../input/input.component';
import { SvgIconComponent } from 'src/app/moules/svg-icon/svg-icon.component';

export default {
  title: 'Common/Forms/Login Form',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent, SvgIconComponent],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
    control: { type: 'select' },
  },
} as Meta;

const Template: Story<LoginFormComponent> = (args: LoginFormComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  primary: true,
};