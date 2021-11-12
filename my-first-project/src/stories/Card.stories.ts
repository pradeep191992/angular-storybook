import { CardComponent } from './../app/component/card/card.component';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Common Card/Card',
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
  title: 'Image Default View',
  cardClasses: 'lg:w-1/3',
  buttonLabel: 'Click Me',
};

export const ImagewithOpacity = Template.bind({});
ImagewithOpacity.args = {
  title: 'Image Centerly Aligned',
  cardClasses: 'opacity-5 sm:flex sm:w-full sm:items-center',
  buttonLabel: 'Click Me',
};

export const leftImg = Template.bind({});
leftImg.args = {
  title: 'Image Left Side View',
  cardClasses: 'sm:flex sm:w-full sm:items-center',
  buttonLabel: 'Left Image',
};

export const rightImg = Template.bind({});
rightImg.args = {
  title: 'Image Right Side View',
  cardClasses: 'w-full sm:flex sm:flex-row-reverse sm:items-center',
  buttonLabel: 'Right Image',
};

export const WithOutImage = Template.bind({});
WithOutImage.args = {
  title: 'Without Image',
  cardClasses: 'sm:w-1/3',
  buttonLabel: 'No Image',
  showImg: false,
};