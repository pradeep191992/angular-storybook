import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SvgIconComponent } from 'src/app/moules/svg-icon/svg-icon.component';
import { StickyStackComponent } from './sticky-stack.component';

export default {
  title: 'Common/Sticky Stack',
  component: StickyStackComponent,
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

const Template: Story<StickyStackComponent> = (args: StickyStackComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  // primary: true,
};

