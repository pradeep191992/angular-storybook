import { AuthenticateFormComponent } from './authenticate-form.component';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Common/Forms/Authenticate Form',
  component: AuthenticateFormComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
    control: { type: 'select' },
  },
} as Meta;

const Template: Story<AuthenticateFormComponent> = (args: AuthenticateFormComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  // first: true,
};
