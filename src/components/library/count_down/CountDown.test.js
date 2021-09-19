import React, { createRef } from 'react';

import { render, screen, act } from '../../../tests/utils/rtl-helper';
import dataGeneration from '../../../utils/data_generation';

import { CountDown } from './CountDown';

describe('component - library - <CountDown />', () => {
  beforeEach(function () {
    this.props = {
      initialCount: dataGeneration.generateRandomInteger(),
      onCountExpired: jest.fn(),
    };
  });

  test('should display initial count', async function () {
    render(<CountDown {...this.props} />);

    expect(screen.getByText(this.props.initialCount)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime((this.props.initialCount + 1) * 1000);
    });
  });

  test('should call onCountExpired when the count reachs 0', async function () {
    render(<CountDown {...this.props} initialCount={2} />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(this.props.onCountExpired).toHaveBeenCalled();
    expect(screen.getByText(0)).toBeInTheDocument();
  });

  test('should increment count', async function () {
    const countDownRef = createRef();
    render(<CountDown ref={countDownRef} {...this.props} initialCount={3} />);

    act(() => {
      countDownRef.current.incrementCount(2);
      jest.advanceTimersByTime(3000);
    });

    expect(this.props.onCountExpired).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(this.props.onCountExpired).toHaveBeenCalled();
  });

  test('should decrement count', async function () {
    const countDownRef = createRef();
    render(<CountDown ref={countDownRef} {...this.props} initialCount={10} />);

    expect(this.props.onCountExpired).not.toHaveBeenCalled();

    act(() => {
      countDownRef.current.decrementCount(8);
      jest.advanceTimersByTime(3000);
    });

    expect(this.props.onCountExpired).toHaveBeenCalled();
  });
});
