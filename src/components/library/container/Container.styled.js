import styled from 'styled-components';

import dimensions from '../../../config/dimensions';

export default styled.div`
  max-width: 1456px;
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: ${dimensions.container.paddingY} ${dimensions.container.paddingX} 0 ${dimensions.container.paddingX};
`;
