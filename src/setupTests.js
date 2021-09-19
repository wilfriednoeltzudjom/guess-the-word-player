import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';
import 'jest-extended';
import 'jest-styled-components';

beforeEach(function () {
  jest.useFakeTimers();
});

afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
