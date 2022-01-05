import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SvgIconComponent } from 'src/app/moules/svg-icon/svg-icon.component';
import { GlassSmallCardComponent } from './glass-small-card.component';

export default {
  title: 'Common/Cards/Small Card',
  component: GlassSmallCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [SvgIconComponent],
    }),
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

const Template: Story<GlassSmallCardComponent> = (args: GlassSmallCardComponent) => ({
  props: args,
});

export const FirstVarient = Template.bind({});
FirstVarient.args = {
  first: false,
  second: true,
  third: false,
  fourth: true,
};
