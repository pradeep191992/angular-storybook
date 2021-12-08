import { TroubleshootCardComponent } from './troubleshoot-card.component';

import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Common/Troubleshoot Card',
  component: TroubleshootCardComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
    control: { type: 'select' },
  },
} as Meta;

const Template: Story<TroubleshootCardComponent> = (args: TroubleshootCardComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  primary: false,
};

