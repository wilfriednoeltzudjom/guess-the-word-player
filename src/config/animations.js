import { keyframes } from 'styled-components';

export const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;
