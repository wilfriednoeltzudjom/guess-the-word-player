import styled from 'styled-components';

import colors from '../../../config/colors';
import { fontSizes } from '../../../config/sizes';

export default styled.span`
  display: ${getDisplay};
  color: ${getTextColor};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
`;

function getDisplay({ fluid }) {
  return fluid ? 'block' : 'inline-block';
}

function getTextColor({ colorScheme }) {
  return colors[colorScheme];
}

function getFontSize({ size }) {
  return fontSizes[size];
}

function getFontWeight({ weight }) {
  return { light: 300, regular: 400, medium: 500, 'semi-bold': 600, bold: 700 }[weight];
}
