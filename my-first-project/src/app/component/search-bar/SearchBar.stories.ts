import { SearchBarComponent } from './search-bar.component';

import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Common/Search Bar',
  component: SearchBarComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
    control: { type: 'select' },
  },
} as Meta;

const Template: Story<SearchBarComponent> = (args: SearchBarComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  primary: true,
};

