import React from 'react';

import { Rule } from '../../components/library';

export default {
  title: 'GuessTheWord/Rule',
  component: Rule,
};

const Template = (args) => <Rule {...args} />;

export const Text = Template.bind({});
Text.args = {
  position: 1,
  content: 'You can start a new game by clicking on the <new game> button and then selecting a mode from <easy> to <hard>.',
};

export const Html = Template.bind({});
Html.args = {
  position: 1,
  content: 'In easy mode <br />- You can start with a <b>7 lives</b> and a counter of <b>30s</b>.',
};
