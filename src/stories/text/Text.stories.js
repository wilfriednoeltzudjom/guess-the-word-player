import React from 'react';

import { Text } from '../../components/library';

export default {
  title: 'GuessTheWord/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium',
  size: 'md',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: 'ExtraLarge',
  size: 'xxl',
  weight: 'bold',
};
