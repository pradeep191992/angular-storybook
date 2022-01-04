import { SearchBarComponent } from './search-bar.component';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SvgIconComponent } from 'src/app/moules/svg-icon/svg-icon.component';

export default {
  title: 'Common/Search Bar',
  component: SearchBarComponent,
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

const Template: Story<SearchBarComponent> = (args: SearchBarComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  primary: true,
};

