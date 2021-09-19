import React from 'react';

import { Modal } from '../../components/library';
import useDisclosure from '../../components/hooks/useDisclosure';

export default {
  title: 'GuessTheWord/Modal',
  component: Modal,
  argTypes: {
    onHide: { action: 'clicked' },
  },
};

const Template = (args) => {
  const { shown } = useDisclosure();

  return (
    <Modal shown={shown} {...args}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem et, obcaecati temporibus amet ipsum laudantium at quo fuga ipsam atque doloribus debitis in! Est cupiditate unde dolore numquam
      aut at.
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  shown: false,
  size: 'sm',
  title: 'Title',
};
