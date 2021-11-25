import { BtnComponent } from './btn.component';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Common/Button',
  component: BtnComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<BtnComponent> = (args: BtnComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Primary Button',
  className: 'primary-btn',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  className: 'secondary-btn',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
  className: 'small-btn',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
  className: 'large-btn',
};

export const xLarge = Template.bind({});
xLarge.args = {
  size: 'xlarge',
  label: 'xLarge Button',
  className: 'xlarge-btn',
};
