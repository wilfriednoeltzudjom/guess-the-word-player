import styled from 'styled-components';

import dimensions from '../../../../config/dimensions';

export default styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${dimensions.footer.minHeight};
`;
