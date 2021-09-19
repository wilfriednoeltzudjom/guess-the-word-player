import styled from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';

export default styled.div`
  width: 100%;
  border-radius: ${dimensions.defaults.radius};
  background: ${colors.background};
  margin: 0.75rem 0;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px 0 rgba(21, 45, 53, 0.73);

  > header {
    text-align: center;
  }

  > main {
    padding: ${getMainPadding};
    color: ${colors.white};
  }
`;

function getMainPadding({ children }) {
  return children ? '1.5rem 0' : 0;
}
