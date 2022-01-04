import { ResetFormComponent } from './reset-form.component';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Common/Forms/Reset Form',
  component: ResetFormComponent,
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
