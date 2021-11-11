import { CardComponent } from './../app/component/card/card.component';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: CardComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Image Centerly Aligned',
  cardClasses: 'center-img',
  buttonLabel: 'Click Me',
};

export const CenterImg = Template.bind({});
CenterImg.args = {
  title: 'Image Centerly Aligned',
  cardClasses: 'center-img',
  buttonLabel: 'Click Me',
};

export const leftImg = Template.bind({});
leftImg.args = {
  title: 'Image Left Aligned',
  cardClasses: 'left-img',
  buttonLabel: 'Show More',
};

export const rightImg = Template.bind({});
rightImg.args = {
  title: 'Image Right Aligned',
  cardClasses: 'right-img',
  buttonLabel: 'Show More',
};

export const CircleImg = Template.bind({});
CircleImg.args = {
  title: 'Image Circle Style',
  cardClasses: 'circle-img',
  buttonLabel: 'Click Me',
};