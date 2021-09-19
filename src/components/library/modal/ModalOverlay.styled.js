import styled, { keyframes } from 'styled-components';

import zIndices from '../../../config/z-indices';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    z-index: ${zIndices.overlay};
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    z-index: ${zIndices.hide}
  }
`;

export default styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: ${zIndices.hide};
  background: rgba(0, 0, 0, 0.5);

  &.shown {
    animation: ${fadeIn} 500ms forwards;
  }
  &.hidden {
    animation: ${fadeOut} 500ms forwards;
  }
`;
