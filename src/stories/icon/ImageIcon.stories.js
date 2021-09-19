import React from 'react';

import { ImageIcon } from '../../components/library';

export default {
  title: 'GuessTheWord/ImageIcon',
  component: ImageIcon,
};

const Template = (args) => <ImageIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'github',
};
