import { TeamBadgeComponent } from './team-badge.component';

import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Common/Team Badge',
  component: TeamBadgeComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
    control: { type: 'select' },
  },
} as Meta;

const Template: Story<TeamBadgeComponent> = (args: TeamBadgeComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  primary: true,
};
