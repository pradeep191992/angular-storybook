import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SvgIconComponent } from 'src/app/moules/svg-icon/svg-icon.component';
import { InputComponent } from './input.component';

export default {
  title: 'Common/Forms/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [SvgIconComponent],
    }),
  ],
  argTypes: {
    // backgroundColor: { control: 'color' },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
    control: { type: 'select' },
  },
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  primary: true,
  // second: false,
  // third: true,
  // fourth: false,
};
