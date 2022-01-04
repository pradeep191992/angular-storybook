
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SvgIconComponent } from 'src/app/moules/svg-icon/svg-icon.component';
import { GlassBigCardComponent } from './glass-big-card.component';

export default {
  title: 'Common/Cards/Big Card',
  component: GlassBigCardComponent,
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

const Template: Story<GlassBigCardComponent> = (args: GlassBigCardComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  first: true,
  second: false,
  third: true,
  fourth: false,
};

export const SecondVarient = Template.bind({});
SecondVarient.args = {
  first: false,
  second: true,
  third: true,
  fourth: false,
};
export const ThirdVarient = Template.bind({});
ThirdVarient.args = {
  first: true,
  second: false,
  third: false,
  fourth: true,
};

export const FourthVarient = Template.bind({});
FourthVarient.args = {
  first: false,
  second: true,
  third: false,
  fourth: true,
};

