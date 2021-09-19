import React from 'react';

import { Anchor, ImageIcon } from '../../components/library';

export default {
  title: 'GuessTheWord/Anchor',
  component: Anchor,
};

const Template = (args) => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <ImageIcon name="github" />,
  url: 'https://www.github.com',
};
