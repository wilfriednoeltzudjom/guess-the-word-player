import styled from 'styled-components';

export default styled.span`
  display: inline-block;
  font-size: ${getIconFontSize};
`;

function getIconFontSize({ size }) {
  return { sm: '1.25rem', md: '1.5rem', lg: '2rem' }[size];
}
