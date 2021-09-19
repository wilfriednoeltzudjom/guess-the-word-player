import styled from 'styled-components';

export default styled.div`
  width: ${getWidth};
  display: flex;
  flex-direction: column;
  align-items: ${getAlignItems};

  > *:not(:last-child) {
    margin-bottom: ${getMarginBottom};
  }
`;

function getWidth({ size }) {
  return size ? `${size}rem` : 'initial';
}

function getMarginBottom({ spacing }) {
  return `${spacing}rem`;
}

function getAlignItems({ justify }) {
  return justify || 'initial';
}
