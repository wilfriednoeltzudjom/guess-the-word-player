import React, { useEffect, useRef } from 'react';

import { CountDown } from '../../components/library';

export default {
  title: 'GuessTheWord/CountDown',
  component: CountDown,
};

function onCountExpired() {
  console.log('Expired');
}

const Template = (args) => <CountDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialCount: 5,
  onCountExpired,
};

export const Stopped = Template.bind({});
Stopped.args = {
  initialCount: 5,
  startCountDown: false,
  onCountExpired,
};

const IncrementTemplate = (args) => {
  const countDownRef = useRef();
  useEffect(() => {
    const timeout = setTimeout(() => {
      countDownRef.current.incrementCount(5);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <CountDown ref={countDownRef} {...args} />;
};

export const Increment = IncrementTemplate.bind({});
Increment.args = {
  initialCount: 5,
  onCountExpired,
};

const DecrementTemplate = (args) => {
  const countDownRef = useRef();
  useEffect(() => {
    const timeout = setTimeout(() => {
      countDownRef.current.decrementCount(5);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <CountDown ref={countDownRef} {...args} />;
};

export const Decrement = DecrementTemplate.bind({});
Decrement.args = {
  initialCount: 10,
  onCountExpired,
};
