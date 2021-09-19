import styled from 'styled-components';

import dimensions from '../../../config/dimensions';
import colors from '../../../config/colors';
import { fontSizes } from '../../../config/sizes';

export default styled.span`
  display: inline-block;
  border-radius: ${dimensions.defaults.radius};
  background: ${colors.secondary};
  font-size: ${fontSizes.sm};
  font-weight: 700;
  color: ${colors.background};
  padding: 7px;
`;
