import { OptionPickerComponent } from './option-picker.component';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

export default {
  title: 'Common/Option Picker',
  component: OptionPickerComponent,
  decorators: [
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

const Template: Story<OptionPickerComponent> = (args: OptionPickerComponent) => ({
  props: args,
});

export const TwoOptions = Template.bind({});
TwoOptions.args = {
  twoOption: true,
  fiveOption: false,
};

export const ThreeOptions = Template.bind({});
ThreeOptions.args = {
  threeOption: true,
  fiveOption: false,
};

export const FourOptions = Template.bind({});
FourOptions.args = {
  fourOption: true,
  fiveOption: false,
};

export const FiveOptions = Template.bind({});
FiveOptions.args = {
  fiveOption: true,
};

