import styled from 'styled-components';

export default styled.div`
  width: ${getWidth};
  display: flex;

  > *:not(:last-child) {
    margin-right: ${getMarginRight};
  }
`;

function getWidth({ size, width }) {
  return width || `${size}rem`;
}

function getMarginRight({ spacing }) {
  return `${spacing}rem`;
}
