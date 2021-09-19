import { useRef } from 'react';

export default function () {
  const countDownRef = useRef();

  function incrementCount(value) {
    if (countDownRef.current) countDownRef.current.incrementCount(value);
  }

  function decrementCount(value) {
    if (countDownRef.current) countDownRef.current.decrementCount(value);
  }

  function stopCountDown() {
    if (countDownRef.current) countDownRef.current.stopCountDown();
  }

  function getCurrentCount() {
    return countDownRef.current.getCurrentCount();
  }

  return { countDownRef, incrementCount, decrementCount, stopCountDown, getCurrentCount };
}
