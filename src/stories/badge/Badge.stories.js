import React from 'react';

import { Badge } from '../../components/library';

export default {
  title: 'GuessTheWord/Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Badge',
};
