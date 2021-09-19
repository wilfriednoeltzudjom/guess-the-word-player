import styled, { keyframes } from 'styled-components';

import colors from '../../../../config/colors';
import dimensions from '../../../../config/dimensions';
import zIndices from '../../../../config/z-indices';

const enter = keyframes`
  from {
    opacity: 0;
    transform: scale(0) translateY(-8rem);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const exit = keyframes`
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0) translateY(-8rem);
  }
`;

const progressBar = keyframes`
  from {
    width: 100%
  }
  to {
    width: 0
  }
`;

const hide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    z-index: ${zIndices.hide};
  }
`;

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${zIndices.tooltip};
  padding: 5rem 5rem 0 5rem;
  display: flex;
  justify-content: center;

  > main {
    position: relative;
    border-radius: ${dimensions.defaults.radius};
    padding: 1.25rem 2rem;
    background: ${colors.secondaryDark};
    filter: drop-shadow(0 0 5px rgba(26, 230, 192, 0.5));
    opacity: 0;
    transform: scale(0) translateY(-8rem);
    animation: ${enter} 800ms forwards;
    animation-delay: 500ms;
    color: ${colors.background};

    > div {
      :first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        border-radius: ${dimensions.defaults.radius};
        background: ${colors.white};
        animation: ${progressBar} 5s forwards;
        animation-delay: 1s;
      }
    }
  }

  &.hidden {
    animation: ${hide} 10ms forwards;
    animation-delay: 800ms;

    > main {
      animation: ${exit} 800ms forwards;
    }
  }
`;
