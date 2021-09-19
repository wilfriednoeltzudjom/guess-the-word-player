import React from 'react';

import { Loading } from '../../components/library';

export default {
  title: 'GuessTheWord/Loading',
  component: Loading,
};

const Template = (args) => {
  return <Loading {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  shown: false,
};
