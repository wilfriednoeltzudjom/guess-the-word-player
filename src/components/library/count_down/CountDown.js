import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';

import CountDownStyled from './CountDown.styled';

export const CountDown = forwardRef((props, ref) => {
  const { initialCount, startCountDown = true, onCountExpired } = props;
  const [count, setCount] = useState(initialCount);
  const countRef = useRef();
  let interval;

  useEffect(() => {
    if (initialCount) countRef.current = initialCount;
  }, [initialCount]);

  useEffect(() => {
    if (!startCountDown) return;

    interval = setInterval(() => {
      if (countRef.current > 0) {
        decrementCount(1);
      } else {
        onCountExpired();
        stopCountDown();
      }
    }, 1000);

    return () => {
      stopCountDown();
    };
  }, []);

  function stopCountDown() {
    clearInterval(interval);
  }

  function incrementCount(value) {
    updateCount(countRef.current + value);
  }

  function decrementCount(value) {
    updateCount(Math.max(countRef.current - value, 0));
  }

  function updateCount(updatedCount) {
    countRef.current = updatedCount;
    setCount(updatedCount);
  }

  function getCurrentCount() {
    return countRef.current;
  }

  useImperativeHandle(ref, () => ({
    stopCountDown,
    incrementCount,
    decrementCount,
    getCurrentCount,
  }));

  return <CountDownStyled>{count}</CountDownStyled>;
});
CountDown.propTypes = {
  initialCount: PropTypes.number.isRequired,
  startCountDown: PropTypes.bool,
  onCountExpired: PropTypes.func.isRequired,
};
