import styled from 'styled-components';

import colors from '../../../config/colors';
import durations from '../../../config/durations';

export default styled.a`
  display: inline-block;
  color: ${colors.white};
  text-decoration: underline;
  transition: all ${durations.tranisation} ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;
