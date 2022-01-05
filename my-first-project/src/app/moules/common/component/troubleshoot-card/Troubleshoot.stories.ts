import { TroubleshootCardComponent } from './troubleshoot-card.component';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator } from '@storybook/angular';

export default {
  title: 'Common/Cards/Troubleshoot Card',
  component: TroubleshootCardComponent,  
  decorators: [
    componentWrapperDecorator((story: any) => `<div style="padding:20px;height: 100vh; background-color: #0F2D60;">${story}</div>`),
  ],
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

