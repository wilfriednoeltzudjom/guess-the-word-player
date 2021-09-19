import React from 'react';

import { Button, Icon } from '../../components/library';

export default {
  title: 'GuessTheWord/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Rouded = Template.bind({});
Rouded.args = {
  children: 'Rounded',
  shape: 'rounded',
};

export const Square = Template.bind({});
Square.args = {
  children: 'A',
  shape: 'square',
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
  icon: <Icon name="close" />,
};

export const Back = Template.bind({});
Back.args = {
  children: 'Back',
  variant: 'ghost',
  icon: <Icon name="arrow-back" size="sm" />,
};
