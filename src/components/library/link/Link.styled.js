import styled from 'styled-components';

import colors from '../../../config/colors';
import durations from '../../../config/durations';

export default styled.button`
  display: inline-block;
  background: transparent;
  border: none;
  text-decoration: underline;
  color: ${getTextColor};
  font-weight: ${getFontWeight};
  transition: all ${durations.tranisation} ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    text-decoration: none;
    font-weight: 700;
  }
`;

function getTextColor({ colorScheme }) {
  return colors[colorScheme];
}

function getFontWeight({ selected }) {
  return selected ? 700 : 'initial';
}
