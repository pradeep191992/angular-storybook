import { NavbarComponent } from './navbar.component';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Common/Navbar',
  component: NavbarComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
    control: { type: 'select' },
  },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const DesktopNavbar = Template.bind({});
DesktopNavbar.args = {
  primary: true,
};

export const MobileNavbar = Template.bind({});
MobileNavbar.args = {
  primary: false,
};