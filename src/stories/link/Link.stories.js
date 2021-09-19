import React from 'react';

import { Link } from '../../components/library';

export default {
  title: 'GuessTheWord/Link',
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
};
