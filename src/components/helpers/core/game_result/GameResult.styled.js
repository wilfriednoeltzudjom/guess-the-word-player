import styled, { keyframes } from 'styled-components';
import dimensions from '../../../../config/dimensions';

const container = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const text = keyframes`
  from {
    transform: translateY(-5rem)
  }

  to {
    transform: translateY(0);
  }
`;

const text2 = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  opacity: 0;
  animation: ${container} 1.2s forwards;
  animation-delay: 100ms;

  > img {
    display: inline-block;
    border-radius: ${dimensions.defaults.radius};
    max-height: 20rem;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 0 5px rgba(184, 223, 216, 0.38));
  }

  > span {
    transform: translateY(-5rem);
    animation: ${text} 1.2s forwards, ${text2} 2s forwards;
  }
`;
