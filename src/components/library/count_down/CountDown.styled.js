import styled from 'styled-components';

import dimensions from '../../../config/dimensions';
import colors from '../../../config/colors';
import { fontSizes } from '../../../config/sizes';

export default styled.div`
  display: inline-block;
  background: ${colors.secondary};
  width: ${dimensions.countDown.width};
  height: ${dimensions.countDown.height};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.background};
  font-size: ${fontSizes.xxl};
  font-weight: 700;
`;
