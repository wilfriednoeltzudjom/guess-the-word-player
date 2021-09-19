import styled, { keyframes } from 'styled-components';

import zIndices from '../../../config/z-indices';
import dimensions from '../../../config/dimensions';

const zoomIn = keyframes`
  from {
    transform: scale(0.8)
  }
  to {
    transform: scale(1);
    z-index: ${zIndices.modal}
  }
`;
const zoomOut = keyframes`
  from {
    transform: scale(1)
  }
  to {
    transform: scale(0);
    z-index: ${zIndices.hide}
  }
`;

export default styled.div`
  width: ${(props) => getWidth(props, { screenSize: 'md' })};
  max-height: calc(100vh - 7.5rem);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  transform: scale(0);

  &.shown {
    animation: ${zoomIn} 300ms forwards;
  }
  &.hidden {
    animation: ${zoomOut} 300ms forwards;
  }

  @media (max-width: 760px) {
    width: ${(props) => getWidth(props, { screen: 'smallScreen' })};
  }

  @media (max-width: 1200px) {
    width: ${(props) => getWidth(props, { screen: 'smallScreen' })};
  }
`;

function getWidth({ size }, { screen = 'largeScreen' } = {}) {
  return dimensions.modal.width[screen][size];
}

export function getModalClassName(shown, hasBeenShownOnce) {
  return hasBeenShownOnce ? (shown ? 'shown' : 'hidden') : 'initial';
}
