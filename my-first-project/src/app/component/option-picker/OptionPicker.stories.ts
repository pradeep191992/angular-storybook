import { OptionPickerComponent } from './option-picker.component';

import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Common/Option Picker',
  component: OptionPickerComponent,
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

export const ThreeOptions = Template.bind({});
ThreeOptions.args = {
  primary: true,
};

// export const SecondVarient = Template.bind({});
// SecondVarient.args = {
//   first: false,
//   second: true,
//   third: true,
//   fourth: false,
// };
// export const ThirdVarient = Template.bind({});
// ThirdVarient.args = {
//   first: true,
//   second: false,
//   third: false,
//   fourth: true,
// };

// export const FourthVarient = Template.bind({});
// FourthVarient.args = {
//   first: false,
//   second: true,
//   third: false,
//   fourth: true,
// };

